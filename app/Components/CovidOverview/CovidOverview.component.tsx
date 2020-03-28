import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { OverviewItemProps, CovidOverviewProps } from './CovidOverview.props';
import s from './CovidOverview.style';

const renderOverviewItem = ({ title, value }: OverviewItemProps) => (
  <View style={s.overviewItem}>
    <Text style={s.overviewItemTitle}>{title}</Text>
    <Text style={s.overviewItemValue}>{value}</Text>
  </View>
);

const renderSeparator = () => (<View style={s.separator} />);

const CovidOverview = ({ positive: positif, recovered, death, style }: CovidOverviewProps) => (
  <View style={[style, s.overview]}>
    {renderOverviewItem({ title: 'Positif', value: positif })}
    {renderSeparator()}
    {renderOverviewItem({ title: 'Sembuh', value: recovered })}
    {renderSeparator()}
    {renderOverviewItem({ title: 'Meninggal', value: death })}
  </View>
);

export default React.memo<CovidOverviewProps>(CovidOverview);
