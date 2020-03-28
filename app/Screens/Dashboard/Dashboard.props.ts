import { CovidOverviewProps } from '../../Components';
import { CovidCase } from '../../Models';

export interface DashboardComponentProps extends Omit<CovidOverviewProps, 'style'> {
  cases: CovidCase[];
}
