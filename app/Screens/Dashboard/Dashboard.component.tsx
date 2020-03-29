import React from 'react';
import {
  View,
} from 'react-native';

import { CovidOverview, CovidCaseList, CaseMap } from '../../Components';
import { DashboardComponentProps } from './Dashboard.props';
import style from './Dashboard.style';

const DashboardComponent = ({ cases, case: CASE, pointTo, ...props }: DashboardComponentProps) => (
  <View style={style.container} >
    <CaseMap
      style={style.mapContainer}
      location={CASE}
    />
    <CovidOverview style={style.overview} {...props} />
    <CovidCaseList data={cases} style={style.detail} onItemClick={pointTo} />
  </View>
);

export default DashboardComponent;
