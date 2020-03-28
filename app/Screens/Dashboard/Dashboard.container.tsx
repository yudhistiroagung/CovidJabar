import React, { useEffect } from 'react';

import { useCovidContext } from '../../Contexts';
import DashboardComponent from './Dashboard.component';
import { DashboardComponentProps } from './Dashboard.props';

const DashboardContainer: React.FC = () => {
  const { fetch, recap, cases} = useCovidContext();

  useEffect(() => {
    fetch();
   }, []);

  const props: DashboardComponentProps = {
    cases,
    positive: recap.positif,
    recovered: recap.sembuh,
    death: recap.meninggal
  }

  return (
    <DashboardComponent {...props}/>
  );
}

export default DashboardContainer;