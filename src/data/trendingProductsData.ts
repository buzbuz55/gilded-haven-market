
import { hauteJoaillerieProducts } from './products/hauteJoaillerie';
import { horlogerieProducts } from './products/horlogerie';
import { maroquinerieProducts } from './products/maroquinerie';
import { objetsArtProducts } from './products/objetsArt';
import { mobilierProducts } from './products/mobilier';

export const trendingProducts = [
  ...objetsArtProducts,
  ...hauteJoaillerieProducts,
  ...horlogerieProducts,
  ...maroquinerieProducts,
  ...mobilierProducts
];

// Export individual categories for potential future use
export {
  hauteJoaillerieProducts,
  horlogerieProducts,
  maroquinerieProducts,
  objetsArtProducts,
  mobilierProducts
};
