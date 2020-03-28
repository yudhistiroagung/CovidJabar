import { StyleProp, ViewStyle } from "react-native";

export interface CovidOverviewProps extends Object {
  positive: number;
  recovered: number;
  death: number;
  style?: StyleProp<ViewStyle>
}

export interface OverviewItemProps {
  title: string;
  value: number;
}