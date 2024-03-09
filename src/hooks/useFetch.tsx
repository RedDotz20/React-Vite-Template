import { useState, useEffect } from 'react';

interface UseFetchProps<T> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  initialData?: T | null;
}

interface UseFetchState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const useFetch = <T,>({ url, method = 'GET', initialData = null }: UseFetchProps<T>): UseFetchState<T> => {
  const [data, setData] = useState<T | null>(initialData as T | null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData: T = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, error, isLoading };
};

export default useFetch;
