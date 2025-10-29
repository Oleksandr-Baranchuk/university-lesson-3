import { withBase } from 'ufo';

const { app } = useRuntimeConfig();
export const withBaseUrl = (src: string) => withBase(src, app.baseURL);
