import pickBy from "lodash-es/pickBy";

import { baseUrl } from "lib/constants/baseUrl";
import type { OgImageOption } from "lib/types/ogImageOption";

export const buildOgImageUrl = (options: OgImageOption) => {
  const purgedOptions = pickBy(options);
  const urlParams = new URLSearchParams(purgedOptions).toString();
  const params = urlParams ? `?${urlParams}` : "";

  return `${window.location.origin ?? baseUrl}/api/generate${params}`;
};
