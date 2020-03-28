import { Dictionary, KeyIdentifier } from '../Types';

export const groupArrayBy = <T>(
  array: T[],
  identifier: KeyIdentifier<T>,
): Dictionary<T[]> => {
  const result: Dictionary<T[]> = {};

  array.forEach((item: T) => {
    const key = identifier(item);
    if (result[key]) {
      result[key].push(item);
    } else {
      result[key] = [item]
    }
  });
  return result;
}