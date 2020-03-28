import { useState, SetStateAction } from 'react';

import { JabarCovidService } from '../Services';
import { ApiError, JabarRecap } from '../Models';

export interface UseJabarRecap {
  fetch: () => void;
  data: JabarRecap;
  loading: boolean;
  error: ApiError;
}

interface HandlerProps {
  setRecap: (action: SetStateAction<JabarRecap>) => void;
  setLoading: (action: SetStateAction<boolean>) => void;
  setError:  (action: SetStateAction<ApiError | undefined>) => void;
}

const getRecapHandler = ({ setRecap, setLoading, setError }: HandlerProps) => async () => {
  setLoading(true)
  try {
    const recap = await JabarCovidService.getRecap();
    setRecap(recap);
  } catch (e) {
    setError(e as ApiError)
  } finally {
    setLoading(false)
  }
}

const initialState: JabarRecap = {
  kode_prov: 0,
  nama_prov: '',
  odp_proses: 0,
  odp_selesai: 0,
  odp_total: 0,
  pdp_proses: 0,
  pdp_selesai: 0,
  pdp_total: 0,
  positif: 0,
  sembuh: 0,
  meninggal: 0
}

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

