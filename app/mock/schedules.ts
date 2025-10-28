import type { WeekSource } from '@/utils/schedule';

export const schedules1: WeekSource = [
  [], //Пн
  [
    [
      {
        teachers: [Teachers.Dugienko],
        lessonType: LessonsType.lecture,
        name: 'Економіка зарубіжних країн',
        time: 2
      },
      {
        teachers: [Teachers.Kusakova],
        lessonType: LessonsType.lecture,
        name: 'Макроекономіка',
        time: 3
      },
      {
        teachers: [Teachers.Cheverda],
        lessonType: LessonsType.lecture,
        name: 'Оптимізаційні методи і моделі',
        time: 4
      }
    ]
  ], //Вт
  [
    {
      teachers: [Teachers.Chrep],
      lessonType: LessonsType.lecture,
      name: 'Економіка підприємства',
      time: 2
    },
    {
      teachers: [Teachers.Chrep],
      lessonType: LessonsType.lecture,
      name: 'Фінанси',
      time: 3
    }
  ], // Ср
  [
    {
      teachers: [Teachers.Gorbunova],
      lessonType: LessonsType.practical,
      name: 'Фінанси',
      time: 2
    },
    {
      teachers: [Teachers.Shevchikina],
      lessonType: LessonsType.practical,
      name: 'Економіка підприємства',
      time: 3
    },
    {
      teachers: [Teachers.Kusakova],
      lessonType: LessonsType.practical,
      name: 'Макроекономіка',
      time: 4
    }
  ], // Чт
  [
    {
      teachers: [Teachers.Slobodianik],
      lessonType: LessonsType.practical,
      name: 'Економіка зарубіжних країн',
      time: 3
    },
    {
      teachers: [Teachers.Cheverda, Teachers.Maxishko],
      lessonType: LessonsType.laboratory,
      name: 'Оптимізаційні методи і моделі',
      time: 4
    }
  ], // Пт
  [
    {
      teachers: [Teachers.Pshenychna],
      lessonType: LessonsType.lecture,
      name: 'Створення контенту засобами сервісів Web 2.0',
      time: 2
    },
    {
      teachers: [Teachers.Panasenko],
      lessonType: LessonsType.lecture,
      name: 'Технології розробки вебсайтів',
      time: 3
    }
  ], // Сб
  [] //Нд
];
export const schedules2: WeekSource = [
  [], //Пн
  [
    [
      {
        teachers: [Teachers.Cheverda],
        lessonType: LessonsType.lecture,
        name: 'Оптимізаційні методи і моделі',
        time: 4
      }
    ]
  ], //Вт
  [
    {
      teachers: [Teachers.Chrep],
      lessonType: LessonsType.lecture,
      name: 'Економіка підприємства',
      time: 2
    },
    {
      teachers: [Teachers.Chrep],
      lessonType: LessonsType.lecture,
      name: 'Фінанси',
      time: 3
    }
  ], // Ср
  [
    {
      teachers: [Teachers.Shevchikina],
      lessonType: LessonsType.practical,
      name: 'Економіка підприємства',
      time: 3
    },
    {
      teachers: [Teachers.Kusakova],
      lessonType: LessonsType.practical,
      name: 'Макроекономіка',
      time: 4
    },
    {
      teachers: [Teachers.Cheverda, Teachers.Maxishko],
      lessonType: LessonsType.laboratory,
      name: 'Оптимізаційні методи і моделі',
      time: 5
    }
  ], // Чт
  [], // Пт
  [
    {
      teachers: [Teachers.Pshenychna],
      lessonType: LessonsType.lecture,
      name: 'Створення контенту засобами сервісів Web 2.0',
      time: 2
    },
    {
      teachers: [Teachers.Panasenko],
      lessonType: LessonsType.lecture,
      name: 'Технології розробки вебсайтів',
      time: 3
    }
  ], // Сб
  [] //Нд
];
