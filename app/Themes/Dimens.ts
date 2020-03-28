import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  padding: {
    p0_5: 4,
    p1: 8,
    p1_5: 12,
    p2: 16,
    p2_5: 20,
    p3: 24,
  },
  window: {
    width,
    height
  }
}