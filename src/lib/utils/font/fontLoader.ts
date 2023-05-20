import { baseUrl } from 'lib/constants/baseUrl';

export const fontLoader = (url: string) =>
  fetch(new URL(url, baseUrl)).then((res) => res.arrayBuffer());
