import { AxiosError } from 'axios';

import { ApiError } from '../Models';


export default (e: AxiosError) => {
  let code = 'SomethingWentWrong';
  // switch(e.code) {
    
  // }
  return new ApiError(code, e);
}