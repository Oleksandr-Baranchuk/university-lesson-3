export const useSuccessToast = (opts?: { title?: string; description?: string }) => {
  const toast = useToast();
  const { t } = useI18n();
  return () => {
    toast.add({
      icon: 'material-symbols-light:check-circle-outline',
      title: opts?.title || t(SuccessMessage.formSuccessTitle),
      description: opts?.description || t(SuccessMessage.formSuccessDescription)
    });
  };
};
