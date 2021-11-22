import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './interfaces'

function App() {
  const [ user, setUser ] = useState<User | null>(null);

  const fetchUser = () => setUser({
    name: 'Mike',
    age: 24,
    county: 'No',
    address: {
      street: 'main',
      code: 'none'
    },
    admin: false
  })

  return (
    <>
      <button onClick={fetchUser}>Fetch</button>
      {user && <p>{user.name}</p>}
    </>
  )
};

export default App;
