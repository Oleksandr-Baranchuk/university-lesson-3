import { setLocale } from 'yup';

const useYupValidationMessage = () => {
  const { t } = useI18n();

  const apply = () => {
    setLocale({
      mixed: {
        required: ({ label }) => t('yup.mixed.required', { label: t(label) }),
        oneOf: ({ values, label }) => t('yup.mixed.oneOf', { values, label: t(label) })
      },
      string: {
        min: ({ min, label }) => t('yup.string.min', { min, label: t(label) }),
        max: ({ max, label }) => t('yup.string.max', { max, label: t(label) }),
        email: ({ label }) => t('yup.string.email', { label: t(label) }),
        url: ({ label }) => t('yup.string.url', { label: t(label) })
      },
      number: {
        min: ({ min, label }) => t('yup.number.min', { min, label: t(label) }),
        max: ({ max, label }) => t('yup.number.max', { max, label: t(label) })
      },
      date: {
        min: ({ min, label }) => t('yup.date.min', { min, label: t(label) }),
        max: ({ max, label }) => t('yup.date.max', { max, label: t(label) })
      }
    });
  };

  return apply;
};

export default useYupValidationMessage;
