import { useState } from "react";

export function useSafeLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [valueProxy, setValueProxy] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value ? JSON.parse(value) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValueProxy(value);
    } catch {
      setValueProxy(value);
    }
  };

  return [valueProxy, setValue];
}
