import { TextureLoader } from 'three';

import {
  dirtimg,
  grassimg,
  glassimg,
  logimg,
  woodimg
} from './img';

const dirtTexture = new TextureLoader(dirtimg);
const logTexture = new TextureLoader(logimg);
const groundTexture = new TextureLoader(grassimg);
const glassTexture = new TextureLoader(glassimg);
const woodTexture = new TextureLoader(woodimg);

export {
  dirtTexture,
  logTexture,
  groundTexture,
  glassTexture,
  woodTexture
};
