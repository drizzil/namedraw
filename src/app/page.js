'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getNames } from '../../lib/db';

export default async function HomePage() {
  let names = [];
  try {
    names = await getNames(); // Fetch data from the database
  } catch (err) {
    console.error('Error fetching names:', err);
  }

  const [selectedName, setSelectedName] = useState('');
  const router = useRouter();

  const handleNextClick = () => {
    if (selectedName) {
      router.push({
        pathname: '/nextpage', // New page route
        query: { name: selectedName }, // Pass selected name in query
      });
    } else {
      alert('Please select a name!');
    }
  };

  return (
    <div className="container">
      <h1>Name Selection</h1>
      <select
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
        className="dropdown"
      >
        <option value="">Select your name</option>
        {names.map((nameEntry) => (
          <option key={nameEntry.id} value={nameEntry.firstname}>
            {nameEntry.firstname}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleNextClick} className="next-button">
        Next
      </button>
    </div>
  );
}
