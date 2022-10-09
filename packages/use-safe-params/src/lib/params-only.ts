export type ParamsOnly<S extends string> = S extends `:${infer Rest}` ? Rest : never;
