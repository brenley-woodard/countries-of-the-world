import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setError('Uh oh! :(');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}