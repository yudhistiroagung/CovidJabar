import React from 'react';
import {
  View, Text,
} from 'react-native';

import { CovidOverview, CovidCaseList  } from '../../Components';
import style from './Dashboard.style';

const DashboardComponent = () => (
  <View style={style.container} >
    <View style={style.mapContainer} />
    <CovidOverview style={style.overview} positif={10} recovered={9} death={2} />
    <CovidCaseList data={[]} style={style.detail} />
  </View>
);

export default DashboardComponent;
