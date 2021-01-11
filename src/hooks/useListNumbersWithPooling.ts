import { useEffect, useCallback, useRef, useState } from 'react';
import { listNumbersAsync, selectNumbers } from 'ducks/numbersSlice';
import { useDispatch, useSelector } from 'react-redux';
import useInterval from './useInterval';

const useListNumbersWithPooling = (page: any, query: any, delay: number) => {
  const dispatch = useDispatch();
  const cache = useRef({});
  let url = useRef('');

  const numbers = useSelector(selectNumbers);
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState<any>({
    data: [],
    total: 0,
    loading: false,
  });


  const fetchData = useCallback(async () => {
    url.current = `page=${page}&query=${query}`;
    if (cache.current[url.current]) {
      const data = cache.current[url.current];
      setData(data);
      setStatus('idle');
    } else {
      dispatch(listNumbersAsync(page, encodeURIComponent(query)));
    }
  }, [dispatch, page, query, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (numbers.loading) {
      setStatus('loading');
    } else {
      setStatus('idle');
    }
  }, [numbers.loading]);

  useEffect(() => {
    cache.current[url.current] = numbers;
    setData(numbers);
  }, [numbers, url]);


  useInterval(() => {
    fetchData();
  },  delay || null);

  return { numbers: data, status };
};

export default useListNumbersWithPooling;
