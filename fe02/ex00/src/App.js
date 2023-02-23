import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchUsers();
        setUsers(result);
      } catch (e) {
        console.error(e);
      }
    })();
  },[]);

 const fetchUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data.results;
}

return (
    <div>
      {users.map((userInfo) =>(
        <div key={userInfo.id}>
          <img src={userInfo.profileImageUrl} alt={userInfo.name} />
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Type: {userInfo.type}</p>
          </div>
      ))}
    </div>
  );
}

export default App;