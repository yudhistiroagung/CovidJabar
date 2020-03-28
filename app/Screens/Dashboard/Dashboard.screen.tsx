import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';

import { useJabarRecap } from '../../Hooks';
import style from './Dashboard.style';

const Dashboard = () => {
  const { fetch, data, error } = useJabarRecap();

  useEffect(() => {
    fetch()
  }, []);

  return (
    <View style={style.container}>
      
    </View>
  );
}

export default Dashboard;