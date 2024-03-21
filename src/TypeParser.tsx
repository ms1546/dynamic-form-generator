export type ParseBasicType<S extends string> = S extends "string"
  ? string
  : S extends "number"
  ? number
  : S extends "boolean"
  ? boolean
  : never;
