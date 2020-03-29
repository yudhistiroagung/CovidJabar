import React from 'react';
import {
  View, Text,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { CovidOverview, CovidCaseList } from '../../Components';
import { DashboardComponentProps } from './Dashboard.props';
import style from './Dashboard.style';

const DashboardComponent = ({ cases, ...props }: DashboardComponentProps) => (
  <View style={style.container} >
    <MapView
      provider={PROVIDER_GOOGLE}
      style={style.mapContainer}
      initialCamera={{
        zoom: 8,
        center: {
          latitude: -6.9032739,
          longitude: 107.5729448,
        },
        altitude: 10,
        pitch: 6,
        heading: 2,
      }}
      scrollEnabled={false}
      zoomEnabled={false}
    />
    <CovidOverview style={style.overview} {...props} />
    <CovidCaseList data={cases} style={style.detail} />
  </View>
);

export default DashboardComponent;
