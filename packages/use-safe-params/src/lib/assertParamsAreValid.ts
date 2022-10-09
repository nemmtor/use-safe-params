import { useParams } from 'react-router-dom';

import { PathParams } from './path-params';

export function assertParamsAreValid<Path extends string>(
  params: ReturnType<typeof useParams<PathParams<Path>>>,
): asserts params is PathParams<Path> extends string ? never : PathParams<Path> {
  Object.entries(params).forEach(([param, paramValue]) => {
    if (paramValue === undefined) {
      throw new Error(`No param: ${param}, value: ${paramValue}`);
    }
  });
}
