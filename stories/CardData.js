import Weezy from "../images/SkateBoardWeezy.png";
import SickBurn from "../images/SickBurn.png";
import Polygons from "../images/BlueTriangles.png";
import Waves from "../images/BlueWaves.png";
import Grass from "../images/Grass.png";
// import TireTread from "../images/TireTread.png";
// import Star from "../images/Star.png";
// import SpaceBackground from "../images/SpaceBackground.png";
import Moon from "../images/Moon.png";
import EarthBackground from "../images/EarthBackground.png";
import Adidas from "../images/Adidas.png";
import AdidasBackground from "../images/AdidasBackground.png";
import Triumph from "../images/Triumph.png";
import TriumphBackground from "../images/TriumphBackground2.png";
import Niel from "../images/Niel.png";
import SpaceBackground from "../images/SpaceBackground.png";
import Pow from "../images/Pow.png";
import PowBackground from "../images/PowBackground.png";


// Showcase props
export const cat1 = {img: {src: "http://placekitten.com/g/300/400", alt: "a cat is loading"}};
export const cat2 = {img: {src: "http://placekitten.com/g/301/400", alt: "a cat is loading"}};
export const cat3 = {img: {src: "http://placekitten.com/g/302/400", alt: "a cat is loading"}};
export const cat4 = {img: {src: "http://placekitten.com/g/303/400", alt: "a cat is loading"}};
export const polygons = {img: {src: Polygons, alt: "polygons are loading"}, title: "Custom Images", text: "Blue polygons are Tight!"};
export const waves = {img: {src: Waves, alt: "polygons are loading"}, title: "Stock Wavys", text: "Yep, stock wavys too!"};
export const grass = {img: {src: Grass, alt: "polygons are loading"}, title: "Stock Wavys", text: "Yep, stock wavys too!"};

// Double image Showcase props
export const weezy = {
  frontImg: {src: Weezy, alt: "a weezy is loading", height: true},
  img: {src: SickBurn, alt: "weezy park is loading"},
};
export const moon = {
  frontImg: {src: Moon, alt: "a moon is loading"},
  img: {src: EarthBackground, alt: "Earth is loading"},
};
export const adidas = {
  frontImg: {src: Adidas, alt: "an ad is loading"},
  img: {src: AdidasBackground, alt: "ad shoes are loading"},
};
export const triumph = {
  frontImg: {src: Triumph, alt: "an ad is loading"},
  img: {src: TriumphBackground, alt: "ad shoes are loading"},
};
export const niel = {
  frontImg: {src: Niel, alt: "an ad is loading"},
  img: {src: SpaceBackground, alt: "ad shoes are loading"},
};
export const pow = {
  frontImg: {src: Pow, alt: "wait for it..."},
  img: {src: PowBackground, alt: "batman is loading"},
};

export default {
  cat1,
  cat2,
  cat3,
  cat4,
  polygons,
  waves,
  grass,
  weezy,
  moon,
  adidas,
  triumph,
  niel,
};
