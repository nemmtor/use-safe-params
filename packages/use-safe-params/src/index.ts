import { useParams } from 'react-router-dom';

import { assertParamsAreValid, PathParams } from './lib';

type Simplify<T> = T extends object ? { [K in keyof T]: Simplify<T[K]> } : T;

export const useSafeParams = <Path extends string>() => {
  const params = useParams<PathParams<Path>>();
  assertParamsAreValid(params);
  return params as Simplify<typeof params>;
};

// eslint-disable-next-line no-console
console.log('test!');
