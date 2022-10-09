import { useParams } from 'react-router-dom';

import { assertParamsAreValid, PathParams } from './lib';

export const useSafeParams = <Path extends string>() => {
  const params = useParams<PathParams<Path>>();
  assertParamsAreValid(params);
  return params;
};
