import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';

import { useCovidCases } from '../../Hooks';
import DashboardComponent from './Dashboard.component';

const Dashboard = () => {
  return (
    <DashboardComponent />
  );
}

export default Dashboard;