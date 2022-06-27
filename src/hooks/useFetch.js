import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    // not async
    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) throw new Error('Error from server');
        return res.json();
      }) // {name:'ali'} in json {"name":"ali"}
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        if ('AbortError' === e.name) {
          console.log('AbortError');
          return;
        }
        setError(e.message);
        setLoading(false);
      });
    return () => {
      abortController.abort(); // throw new Error('AbortError');
      setData(null);
      setError(null);
      setLoading(true);
    }; // clean up
  }, [url]);

  return { data, error, loading }; // Tuple
  // const [a, ,c] = useFetch
};

export default useFetch;
