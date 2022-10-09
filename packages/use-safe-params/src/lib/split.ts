export type Split<
  S extends string,
  ReplaceBy extends string,
  Accumulator extends string = '',
> = S extends `${infer Head}${infer Rest}`
  ? Head extends ReplaceBy
    ? Accumulator | Split<Rest, ReplaceBy, ''>
    : Split<Rest, ReplaceBy, `${Accumulator}${Head}`>
  : Accumulator;
