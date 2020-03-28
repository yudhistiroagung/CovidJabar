import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';

import { useCovidCases } from '../../Hooks';
import style from './Dashboard.style';

const Dashboard = () => {
  const { fetch, data, error } = useCovidCases();

  useEffect(() => {
    fetch()
  }, []);

  return (
    <View style={style.container}>
      
    </View>
  );
}

export default Dashboard;