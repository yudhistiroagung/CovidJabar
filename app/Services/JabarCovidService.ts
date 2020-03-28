import axios, { AxiosResponse, AxiosError } from 'axios';

import errorMapper from './ErrorMapper';
import { Response, JabarRecap, CovidCase } from '../Models';

const BASE_URL = 'https://covid19-public.digitalservice.id/api/v1/';

export interface JabarCovidService {
  getRecap: () => Promise<JabarRecap>;
  getCases: () => Promise<CovidCase[]>;
}

class JabarCovidApi implements JabarCovidService {

  public async getRecap(): Promise<JabarRecap> {
    try {
      const response: AxiosResponse<Response<JabarRecap>> = await axios.get(`${BASE_URL}rekapitulasi/jabar`);
      return response.data.content;
    } catch (e) {
      const err: AxiosError = e as AxiosError;
      throw errorMapper(err)
    }
  }

  public async getCases(): Promise<CovidCase[]> {
    try {
      const response: AxiosResponse<Response<CovidCase[]>> = await axios.get(`${BASE_URL}sebaran/jabar`);
      return response.data.content;
    } catch (e) {
      const err: AxiosError = e as AxiosError;
      throw errorMapper(err)
    }
  }
  
}

export default new JabarCovidApi();