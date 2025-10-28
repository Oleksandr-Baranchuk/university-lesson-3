import yup from './yup';

export default defineI18nLocale(() => ({
  yup,
  header: {
    navigation: {
      home: 'Головна',
      news: 'Новини',
      education: 'Навчання',
      contacts: 'Контакти'
    }
  },
  home: {
    title: 'Вітаю'
  },
  forms: {
    contacts: {
      title: 'Контактна форма',
      fields: {
        name: {
          label: "Ім'я",
          placeholder: "Ваше Ім'я"
        },
        email: {
          label: 'Email',
          placeholder: 'Ваш email'
        },
        message: {
          label: 'Повідомлення',
          placeholder: 'Веше повідомлення'
        }
      }
    },
    success: {
      title: 'Успішно!',
      description: 'Ваше повідомлення було відправлено!'
    }
  },
  actions: {
    submit: 'Надіслати'
  },
  schedule: {
    title: 'Розклад',
    pair: 'пара',
    contactsType: {
      zoom: 'Zoom',
      googleMeet: 'Meet'
    },
    days: {
      Mon: 'Пн',
      Tue: 'Вт',
      Wed: 'Ср',
      Thu: 'Чт',
      Fri: 'Пт',
      Sat: 'Сб',
      Sun: 'Нд'
    },
    lessonType: {
      '1': 'Пз',
      '2': 'Лк',
      '3': 'Лб'
    },
    modals: {
      contacts: {
        title: 'Додаткова інформація',
        teacher: 'Викладач'
      }
    }
  },
  news: {
    title: 'Новини'
  }
}));
