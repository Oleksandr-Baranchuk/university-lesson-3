export default {
  mixed: {
    required: '{label} є обовʼязковим',
    oneOf: '{label} має бути одним із: {values}',
    notOneOf: '{label} не має бути одним із: {values}',
    defined: '{label} має бути визначеним',
    notType: '{label} має бути типу {type}'
  },
  string: {
    min: '{label} мінімум {min} символів',
    max: '{label} максимум {max} символів',
    length: '{label} має містити рівно {length} символів',
    email: 'Некоректний {label}',
    url: 'Некоректна URL {label}',
    uuid: 'Некоректний UUID {label}',
    matches: '{label} має відповідати шаблону: {regex}',
    trim: '{label} має бути без пробілів на краях',
    lowercase: '{label} має бути в нижньому регістрі',
    uppercase: '{label} має бути у верхньому регістрі'
  },
  number: {
    min: '{label} має бути не менше ніж {min}',
    max: '{label} має бути не більше ніж {max}',
    lessThan: '{label} має бути менше ніж {less}',
    moreThan: '{label} має бути більше ніж {more}',
    positive: '{label} має бути додатним числом',
    negative: '{label} має бути відʼємним числом',
    integer: '{label} має бути цілим числом'
  },
  date: {
    min: '{label} має бути не раніше {min}',
    max: '{label} має бути не пізніше {max}'
  },
  array: {
    min: 'У {label} щонайменше {min} елементів',
    max: 'У {label} не більше ніж {max} елементів',
    length: '{label} має містити рівно {length} елементів'
  },
  object: {
    noUnknown: '{label} містить невідомі ключі: {unknown}'
  }
};
