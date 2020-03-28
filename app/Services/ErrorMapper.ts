import { AxiosError } from 'axios';

import { ApiError } from '../Models';


export default (e: AxiosError) => {
  let code = 'SometihngWentWrong';

  return new ApiError(code, e);
}