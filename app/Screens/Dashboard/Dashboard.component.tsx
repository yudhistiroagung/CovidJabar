import React from 'react';
import {
  View, Text,
} from 'react-native';

import { CovidOverview  } from '../../Components';
import style from './Dashboard.style';

const DashboardComponent = () => (
  <View style={style.container} >
    <View style={style.mapContainer} />
    <CovidOverview style={style.overview} positif={10} recovered={9} death={2} />
    <View style={style.detail} />
  </View>
);

export default DashboardComponent;
