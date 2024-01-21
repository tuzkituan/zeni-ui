type Collection =
  | Record<string, any>
  | any[]
  | Set<any>
  | Map<any, any>
  | React.ReactNode;

export const isEmpty = (value: Collection): boolean => {
  if (value == null) {
    return true;
  }

  if (Array.isArray(value) || typeof value === "string") {
    return value.length === 0;
  }

  if (value instanceof Set || value instanceof Map) {
    return value.size === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};
