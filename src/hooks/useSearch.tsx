import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearch(query: string, pageNumber: Number, api: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState<any | null>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;

    axios({
      method: 'GET',
      url: `http://172.20.10.177:5502/${api}`,
      params: api === 'unit/measurement' ? { desc: query, page: pageNumber } : { cod: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      })
    }).then((res) => {
      setData((prevData: any) => [...prevData, ...res.data.data.map((b: any) => `${b.cod} - ${b.description}`)]);
      setHasMore(res.data.data.length > 0);
      setLoading(false);
    }).catch((e) => {
      if (axios.isCancel(e)) return;
      setError(true);
    });
    return () => cancel();
  }, [query, pageNumber]);

  return {
    loading,
    error,
    data,
    hasMore
  };
}
