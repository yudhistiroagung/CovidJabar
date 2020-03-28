import { AxiosError } from 'axios';

import { CovidError } from '../Models';


export default (e: AxiosError) => {
  let code = 'SometihngWentWrong';

  return new CovidError(code, e);
}