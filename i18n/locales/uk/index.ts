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
    }
  },
  actions: {
    submit: 'Надіслати'
  }
}));
