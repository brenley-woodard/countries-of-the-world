import React from 'react';
import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const { countries, error } = useCountries();
  return (
    <main>
      <h2> Maps of the World </h2>
      <p style={{ color: 'red' }}>{error}</p>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </main>
  );
}
