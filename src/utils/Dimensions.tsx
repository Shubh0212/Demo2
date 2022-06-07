import {Dimensions, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');

const scale = width / 414;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}
