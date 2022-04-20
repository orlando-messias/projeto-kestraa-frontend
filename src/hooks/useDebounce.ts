import { useRef } from 'react';

const useDebounce = (fn: Function, delay: number) => {
  const timeoutRef = useRef<any | null>(null);

  function debounceFn(...args: any) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
};

export default useDebounce;
