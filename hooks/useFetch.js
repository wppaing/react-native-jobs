import { useEffect, useState } from 'react';
// import { RAPID_API_KEY } from '@env';
import axios from 'axios';

// const apiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: query,
    headers: {
      'X-RapidAPI-Key': 'a288ee7f62msh632bc8c9f056763p10af7cjsn1f8f4f0bce3d',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data, error, refetch: fetchData };
};

export default useFetch;
