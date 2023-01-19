import React, { useState } from 'react';
import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');

  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const filtered = countries.filter((country) => country.continent === continent || continent === 'all');
  
  return (
    <main>
      <h2> Maps of the World </h2>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">All</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>{continent}</option>
        ))}
      </select>
      <p style={{ color: 'red' }}>{error}</p>
      {filtered.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </main>
  );
}
