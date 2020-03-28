import { useState, SetStateAction } from 'react';

import { JabarCovidService } from '../Services';
import { CovidCase, ApiError } from '../Models';

export interface UseCovidCases {
  fetch: () => Promise<void>;
  data: CovidCase[];
  loading: boolean;
  error: ApiError | undefined;
}

interface HandlerProps {
  setCases: (action: SetStateAction<CovidCase[]>) => void;
  setLoading: (action: SetStateAction<boolean>) => void;
  setError: (action: SetStateAction<ApiError | undefined>) => void;
}

const getCasesHandler = ({ setCases, setLoading, setError }: HandlerProps) => async () => {
  setLoading(true);
  setError(undefined);
  try {
    const cases = await JabarCovidService.getCases();
    setCases(prev => {
      return [
        ...prev.splice(0, 0),
        ...cases
      ]
    });
  } catch (e) {
    setError(e as ApiError);
  } finally {
    setLoading(false);
  }
}

const initialState: CovidCase[] = [];

export const useCovidCases = () => {
  const [cases, setCases] = useState<CovidCase[]>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | undefined>(undefined);

  const fetch = getCasesHandler({ setCases, setLoading, setError });

  return {
    fetch,
    data: cases,
    loading,
    error
  } as UseCovidCases;
}