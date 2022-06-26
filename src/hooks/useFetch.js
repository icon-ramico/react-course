import { useEffect, useState } from 'react';
const useFetch = url => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // not async
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error from server');
        return res.json();
      }) // {name:'ali'} in json {"name":"ali"}
      .then(data => {
        setData(data);
      })
      .catch(e => {
        setError(e.message);
      });
    setLoading(false);
    return () => {
      setData(null);
      setError(null);
      setLoading(true);
    }; // clean up
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
