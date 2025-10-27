import yup from './yup';

export default defineI18nLocale(() => ({
  yup,
  header: {
    navigation: {
      home: 'Home',
      news: 'News',
      education: 'Education',
      contacts: 'Contacts'
    }
  },
  forms: {
    contacts: {
      title: 'Contacts Form',
      fields: {
        name: {
          label: 'Name',
          placeholder: 'Your name'
        },
        email: {
          label: 'Email',
          placeholder: 'Your email'
        },
        message: {
          label: 'Message',
          placeholder: 'Your Message'
        }
      }
    },
    success: {
      title: 'Success!',
      description: 'Your message has been send!'
    }
  },
  actions: {
    submit: 'Submit'
  }
}));
