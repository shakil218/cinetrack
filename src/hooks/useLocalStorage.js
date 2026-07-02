import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(key);
        if (stored) {
          setValue(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Failed to read localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [key]);

  useEffect(() => {
    if (!isLoading) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isLoading]);

  return [value, setValue, isLoading];
}