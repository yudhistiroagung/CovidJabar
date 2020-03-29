import { StyleProp, ViewStyle } from 'react-native';

import { CaseMapLocation } from '../../Models';

export interface CaseMapProps {
  style?: StyleProp<ViewStyle>;
  location: CaseMapLocation;
}