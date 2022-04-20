import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query: string, pageNumber: Number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [books, setBooks] = useState<any | null>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;

    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      // eslint-disable-next-line no-return-assign
      cancelToken: new axios.CancelToken((c) => cancel = c)
    }).then((res) => {
      setBooks((prevBooks: any) => [...prevBooks, ...res.data.docs.map((b: any) => b.title)]);
      setHasMore(res.data.docs.length > 0);
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
    books,
    hasMore
  };
}
