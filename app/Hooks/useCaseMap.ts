import { useState, SetStateAction } from 'react';
import { LatLng } from 'react-native-maps';

import { CovidCase } from '../Models';

export interface UseCaseMap {
  case: CaseInfo;
  pointTo: (c: CovidCase) => void;
};

export interface CaseInfo {
  zoom: number;
  location: LatLng;
  isCase: boolean;
};

interface UseCaseMapState {
  jabar: CaseInfo;
  case?: CaseInfo;
};

const initialState: UseCaseMapState = {
  jabar: {
    zoom: 8,
    location: {
      latitude: -6.9032739,
      longitude: 107.5729448,
    },
    isCase: false,
  },
  case: undefined,
};

const pontToCaseHandler = (setState: (action: SetStateAction<UseCaseMapState>) => void) => (c?: CovidCase) => {
  const newCase: CaseInfo | undefined = !!c
    ? {
      zoom: 12,
      location: {
        latitude: c.latitude,
        longitude: c.longitude
      },
      isCase: true }
    : undefined;
  setState((prevState: UseCaseMapState) => ({
    ...prevState,
    case: newCase,
  }));
}

export const useCaseMap = () => {
  const [state, setState] = useState(initialState);

  const pointTo = pontToCaseHandler(setState)
  const caseInfo: CaseInfo = state.case ? state.case : state.jabar;

  return {
    case: caseInfo,
    pointTo,
  } as UseCaseMap;
}

