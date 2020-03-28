import { useState, SetStateAction } from 'react';

import { JabarCovidService } from '../Services';
import { ApiError, JabarRecap } from '../Models';
import { jabarRecapInitialState } from '../Fixtures';

export interface UseJabarRecap {
  fetch: () => Promise<void>;
  data: JabarRecap;
  loading: boolean;
  error: ApiError;
}

interface HandlerProps {
  setRecap: (action: SetStateAction<JabarRecap>) => void;
  setLoading: (action: SetStateAction<boolean>) => void;
  setError: (action: SetStateAction<ApiError | undefined>) => void;
}

const getRecapHandler = ({ setRecap, setLoading, setError }: HandlerProps) => async () => {
  setLoading(true);
  setError(undefined);
  try {
    const recap = await JabarCovidService.getRecap();
    setRecap(recap);
  } catch (e) {
    setError(e as ApiError);
  } finally {
    setLoading(false);
  }
}

const initialState: JabarRecap = { ...jabarRecapInitialState }

export const useJabarRecap = () => {
  const [recap, setRecap] = useState<JabarRecap>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | undefined>(undefined);

  const fetch = getRecapHandler({ setRecap, setLoading, setError })

  return {
    fetch,
    data: recap,
    loading,
    error,
  } as UseJabarRecap;

}

