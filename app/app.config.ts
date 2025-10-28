export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'fuchsia',
      neutral: 'gray'
    },
    popover: {
      slots: {
        content: 'shadow-sm dark:shadow-white/50'
      }
    },
    formField: {
      defaultVariants: {
        size: 'xl'
      }
    },
    input: {
      defaultVariants: {
        size: 'xl'
      }
    },
    textarea: {
      defaultVariants: {
        size: 'xl'
      }
    },
    pageBody: {
      base: 'mt-8 lg:pb-2 md:pb-16 pb-6 space-y-12'
    },
    footer: {
      slots: {
        container: 'pb-4 pt-0 lg:pb-8'
      }
    }
  }
});
