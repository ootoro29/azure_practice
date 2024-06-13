"use client"
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'GET',
        });

        const data = await res.json() as User[];
        console.log(data);
        data.map((d) => {
          setUsers((prev) => {
            if(prev.findIndex((v) => v.id == d.id) != -1)return [...prev];
            return [...prev,d];
          });
        })
      } catch (error) {
        setError("error");
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {users.map((user,i) => (
          <li key={i}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
