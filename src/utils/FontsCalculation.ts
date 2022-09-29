import { Platform, PixelRatio } from 'react-native';
import DeviceConfig from './DeviceConfig';

// based on iphone 5s's scale
const scale = DeviceConfig.screenWidth / 375;

export function normalize(size: number): number {
  const newSize: number = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}