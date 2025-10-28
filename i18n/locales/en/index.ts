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
  },
  home: {
    title: 'Welcome'
  },
  schedule: {
    title: 'Schedule',
    pair: 'pair',
    contactsType: {
      zoom: 'Zoom',
      googleMeet: 'Meet'
    },
    days: {
      Mon: 'Mon',
      Tue: 'Tue',
      Wed: 'Wed',
      Thu: 'Thu',
      Fri: 'Fri',
      Sat: 'Sat',
      Sun: 'Sun'
    },
    lessonType: {
      '1': 'Pr',
      '2': 'Lec',
      '3': 'Lab'
    },
    modal: {
      contacts: {
        title: 'Additional Information',
        teacher: 'Teacher'
      }
    }
  },
  news: {
    title: 'News'
  }
}));
