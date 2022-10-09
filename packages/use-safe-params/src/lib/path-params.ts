import { ParamsOnly } from './params-only';
import { Split } from './split';

export type PathParams<Path extends string> = Record<ParamsOnly<Split<Path, '/'>>, string>;
