import { useEffect, useState } from "react";

function useBounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return debounceValue;
}

export default useBounce;
