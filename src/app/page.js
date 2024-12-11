import { getNames } from '../../lib/db';

export default async function HomePage() {
  let names = [];
  try {
    names = await getNames(); // Fetch data from the database
  } catch (err) {
    console.error('Error fetching names:', err);
  }

  return (
    <div>
      <h1>Name Selection</h1>
      <ul>
        {names.length > 0 ? (
          names.map((nameEntry) => (
            <li key={nameEntry.id}>{nameEntry.firstname}</li>
          ))
        ) : (
          <p>No names found or an error occurred.</p>
        )}
      </ul>
    </div>
  );
}
