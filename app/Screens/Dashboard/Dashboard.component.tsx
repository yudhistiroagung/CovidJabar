import React from 'react';
import {
  View, Text,
} from 'react-native';

import { CovidOverview, CovidCaseList } from '../../Components';
import { DashboardComponentProps } from './Dashboard.props';
import style from './Dashboard.style';

const DashboardComponent = ({ cases, ...props }: DashboardComponentProps) => (
  <View style={style.container} >
    <View style={style.mapContainer} />
    <CovidOverview style={style.overview} {...props} />
    <CovidCaseList data={cases} style={style.detail} />
  </View>
);

export default DashboardComponent;
