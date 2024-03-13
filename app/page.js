import Form from '../Components/Form/Form';
import UserCard from '../Components/UserCard/UserCard';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${userInput}`);
    const data = await response.json();
    setApiResponse(data);
  };

  useEffect(() => {
    fetchData();
  }, [userInput]);

  return (
    <div className="card">
      <Form submitUser={setUserInput} />
      {apiResponse && <UserCard dataReceived={apiResponse} />}
    </div>
  );
}
