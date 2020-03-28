import React, { useEffect } from 'react';

import { ActivityIndicator } from 'react-native';

import { useCovidContext } from '../../Contexts';
import DashboardComponent from './Dashboard.component';
import DashboardDefense from './Dashboard.defense';
import { DashboardComponentProps } from './Dashboard.props';

const DashboardContainer: React.FC = () => {
  const { fetch, recap, cases, loading, error } = useCovidContext();

  useEffect(() => {
    fetch();
  }, []);

  const props: DashboardComponentProps = {
    cases,
    positive: recap.positif,
    recovered: recap.sembuh,
    death: recap.meninggal
  }

  if (!!loading || !!error) {
    return <DashboardDefense retry={fetch} loading={loading} />;
  }

  return <DashboardComponent {...props} />;
    
}

export default DashboardContainer;