import { CovidCase } from '../../Models';
import {ItemClickHandler } from '../../Types';
import { StyleProp, ViewStyle } from 'react-native';

export interface CovidCaseListProps {
  style?: StyleProp<ViewStyle>;
  data: CovidCase[];
  onItemClick?: ItemClickHandler<CovidCase>;
}