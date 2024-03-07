export const shouldForwardProp =
  <T extends Record<string, unknown>>(customProps: ReadonlyArray<keyof T>) =>
  (prop: string): boolean => {
    return !customProps.includes(prop);
  };

export const shouldNotForwardPropsWithKeys =
  <T>(props: ReadonlyArray<keyof T>) =>
  (propName: PropertyKey): boolean => {
    return !props.map((p) => p.toString()).includes(propName.toString());
  };
