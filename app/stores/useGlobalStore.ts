const useGlobalStore = defineStore('GlobalStore', () => {
  const loadings = ref(false);

  const setLoadings = (v: boolean) => {
    loadings.value = v;
  }

  return {
    loadings,

    setLoadings,
  }
});

export default useGlobalStore;
