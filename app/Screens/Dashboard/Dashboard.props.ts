import { CovidOverviewProps } from '../../Components';
import { CovidCase } from '../../Models';
import { UseCaseMap } from '../../Hooks';

export interface DashboardComponentProps extends Omit<CovidOverviewProps, 'style'>, UseCaseMap {
  cases: CovidCase[];
}

export interface DashboardDefenseProps {
  retry: () => void;
  loading: boolean;
}
