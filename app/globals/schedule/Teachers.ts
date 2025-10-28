const Teachers = {
  Dugienko: {
    firstName: 'Наталя',
    lastname: 'Дугієнко',
    middleName: 'Олександрівна',
    contacts: [
      {
        type: 'zoom',
        id: '7452045605',
        pass: '12345'
      },
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/fbn-rrhv-zcs'
      }
    ]
  },
  Kusakova: {
    firstName: 'Юлія',
    lastname: 'Кусакова',
    middleName: 'Олександрівна',
    contacts: [
      {
        type: 'zoom',
        id: '9476426335',
        pass: '7391',
        link: 'https://us02web.zoom.us/j/9476426335?pwd=fqcxArEUfDrdKsELHY1SOiuf3Ab80l.1'
      },
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/uyu-uqzv-ohe'
      }
    ]
  },
  Cheverda: {
    firstName: 'Сергій',
    lastname: 'Чеверда',
    middleName: 'Сергійович',
    contacts: [
      {
        type: 'zoom',
        link: 'https://us02web.zoom.us/j/7749348141?pwd=aEZBZFViekREK3pyRTIzb3Qyc0NJUT09'
      },
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/ybo-upnx-chq'
      }
    ]
  },
  Maxishko: {
    firstName: 'Наталія',
    lastname: 'Максишко',
    middleName: 'Костянтинівна',
    contacts: []
  },
  Chrep: {
    firstName: 'Алла',
    lastname: 'Череп',
    middleName: 'Василівна',
    contacts: [
      {
        type: 'zoom',
        id: '7450351614',
        pass: '1234'
      }
    ]
  },
  Gorbunova: {
    firstName: 'Анна',
    lastname: 'Горбунова',
    middleName: 'Володимирівна',
    contacts: [
      {
        type: 'zoom',
        id: '7121902107',
        pass: '1234'
      },
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/wep-zfdu-eex'
      }
    ]
  },
  Shevchikina: {
    firstName: 'Інна',
    lastname: 'Щебликіна',
    middleName: 'Олександрівна',
    contacts: [
      {
        type: 'zoom',
        id: '3238585040',
        pass: '7FtFY3'
      },
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/ekh-mjfr-qwk'
      }
    ]
  },
  Slobodianik: {
    firstName: 'Ірина',
    lastname: 'Слободяник',
    middleName: 'Миколаївна',
    contacts: [
      {
        type: 'zoom',
        id: '2235394232',
        pass: '1116'
      },
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/ske-mdek-nov'
      }
    ]
  },
  Pshenychna: {
    firstName: 'Олена',
    lastname: 'Пшенична',
    middleName: 'Станіславівна',
    contacts: [
      {
        type: 'zoom',
        id: '2629695006',
        pass: '3tMCJG'
      }
    ]
  },
  Panasenko: {
    firstName: 'Євген',
    lastname: 'Панасенко',
    middleName: 'Валерійович',
    contacts: [
      {
        type: 'googleMeet',
        link: 'https://meet.google.com/fhj-fich-wnk'
      }
    ]
  }
} as const satisfies Record<string, TTeacher>;

export default Teachers;
