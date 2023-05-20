import { fontLoader } from './fontLoader';

const outfitFontLoader = (weight: string) =>
  fontLoader(`/assets/fonts/Outfit-${weight}.ttf`);

export const outfitRegular = outfitFontLoader('Regular');
export const outfitMedium = outfitFontLoader('Medium');
export const outfitBold = outfitFontLoader('Bold');
