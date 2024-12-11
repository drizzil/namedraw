import { useRouter } from 'next/router';

export default function NextPage() {
  const router = useRouter();
  const { name } = router.query; // Retrieve the name from the query parameter

  return (
    <div className="container">
      <h1>You selected: {name}</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
}
