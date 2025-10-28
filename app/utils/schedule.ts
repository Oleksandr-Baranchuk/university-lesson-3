import dayjs, { type Dayjs } from 'dayjs';

type SourceLesson = {
  time: number;
  name: string;
  teachers: TTeacher[];
  lessonType: number;
};

type DaySchedule = (SourceLesson | SourceLesson[])[];
export type WeekSource = DaySchedule[];
export type CellHead = { type: 'head'; title: string };
export type CellTime = { type: 'time'; time: number };
export type CellInfo = { type: 'info'; date: string; isDisabled: boolean } & SourceLesson;
export type CellEmpty = Record<string, never>;
export type Cell = CellHead | CellTime | CellInfo | CellEmpty;
export type TableRow = (CellHead | CellTime | CellInfo | CellEmpty)[];
export type Table = TableRow[];

type BuildParams = {
  schedules1: WeekSource; // numerator
  schedules2: WeekSource; // denominator
  startMonday: Dayjs;
  fromDate?: Date;
  weeksToShow?: number;
};

export const getMonday = (d: string | number | Date) => dayjs(d).startOf('isoWeek');

const fmt = (d: Dayjs) => dayjs(d).format(DateFormats.base);

const flattenDay = (day: DaySchedule): SourceLesson[] => day.flatMap(x => (Array.isArray(x) ? x : [x]));

const pickLesson = (day: DaySchedule, pair: number): SourceLesson | void => flattenDay(day).find(l => l.time === pair);

const weekParity = (startMonday: Dayjs, weekMonday: Dayjs): 1 | 2 => {
  const diffWeeks = weekMonday.startOf('isoWeek').diff(startMonday.startOf('isoWeek'), 'week');
  return diffWeeks % 2 === 0 ? 1 : 2;
};

const setTime = (d: Dayjs, hhmm?: string) => {
  if (!hhmm) return d;
  const [h, m] = hhmm.split(':');
  return d.set('hour', Number(h)).set('minute', Number(m));
};

export const isHead = (c?: Cell): c is CellHead => !!c && (c as any).type === 'head';
export const isTime = (c?: Cell): c is CellTime => !!c && (c as any).type === 'time';
export const isInfo = (c?: Cell): c is CellInfo => !!c && (c as any).type === 'info';

const rowHasInfo = (r?: TableRow) => r?.slice(1).some(isInfo);

export const buildScheduleTable = ({
  schedules1,
  schedules2,
  startMonday,
  fromDate = new Date(),
  weeksToShow = 5
}: BuildParams): Table => {
  const dateNow = dayjs();
  const windowStartMon = getMonday(fromDate);
  const mondays = Array.from({ length: weeksToShow }, (_, i) => windowStartMon.add(i, 'week'));

  const table: Table = [];

  for (let dayIdx = 0; dayIdx < Days.length; dayIdx++) {
    const headRow: TableRow = [
      { title: Days[dayIdx] || '', type: 'head' },
      ...mondays.map(m => ({ title: fmt(m.add(dayIdx, 'day')), type: 'head' }) as CellHead)
    ];
    table.push(headRow);

    for (let pair = 1; pair <= LessonTimes.length; pair++) {
      const timeRow: TableRow = [{ time: pair, type: 'time' }];

      for (const mon of mondays) {
        const parity = weekParity(startMonday, mon);
        const activeWeek = parity === 1 ? schedules1 : schedules2;
        const day = activeWeek[dayIdx] ?? [];
        const found = pickLesson(day, pair);
        if (found) {
          const time = LessonTimes[found.time - 1]?.end;
          const date = setTime(mon.add(dayIdx, 'day'), time);
          const item = { ...found, date: fmt(date), isDisabled: dateNow.isAfter(date), type: 'info' } as CellInfo;

          timeRow.push(item);
        } else {
          timeRow.push({});
        }
      }

      table.push(timeRow);
    }
  }

  const outTable: Table = [];
  for (let i = 0; i < table.length; ) {
    const head = table[i] as TableRow;
    outTable.push(head);

    const dayRows = table.slice(i + 1, i + 1 + LessonTimes.length) as TableRow[];

    const nonEmpty = dayRows.filter(rowHasInfo);

    if (nonEmpty.length > 0) {
      outTable.push(...nonEmpty);
    } else if (dayRows[0]) {
      outTable.push(dayRows[0]);
    }

    i += 1 + LessonTimes.length;
  }
  return outTable;
};
