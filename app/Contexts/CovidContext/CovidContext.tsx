import React, {
  ProviderExoticComponent,
  ProviderProps,
} from 'react';

import createContext from '../createContext';
import { JabarRecap, CovidCase, ApiError } from '../../Models';
import { useJabarRecap, useCovidCases, useCaseMap, UseCaseMap } from '../../Hooks';

export interface CovidContextProps extends UseCaseMap {
  fetch: () => Promise<void>;
  recap: JabarRecap;
  cases: CovidCase[];
  loading: boolean;
  error?: ApiError;
}

const [useCtx, Provider] = createContext<CovidContextProps>();
const CovidCtxProvider = Provider as ProviderExoticComponent<ProviderProps<CovidContextProps>>;

const fetchAll = (
  fetchRecap: () => Promise<void>,
  fetchCases: () => Promise<void>,
) => async () => {
  await fetchRecap();
  await fetchCases();
}

const useComposeHooks = (): CovidContextProps => {
  const recap = useJabarRecap();
  const cases = useCovidCases();
  const caseMap = useCaseMap();

  const fetch = fetchAll(recap.fetch, cases.fetch);
  const loading = recap.loading || cases.loading;
  const error = recap.error || cases.error;

  return {
    fetch,
    loading,
    error,
    recap: recap.data,
    cases: cases.data,
    ...caseMap,
  } as CovidContextProps;
}

export const useCovidContext = useCtx;

export const CovidProvider: React.FC = ({ children }) => {
  const value: CovidContextProps = useComposeHooks();
  return (
    <CovidCtxProvider value={value}>{children}</CovidCtxProvider>
  );
}
