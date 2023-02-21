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
  const response = await axios({
    method: 'get'
    url: '/v1/users',
    headers: 
      'Notion-Version': '2022-02-16',
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  });
  return response.data.results;
 }

  const userInfos = users.map((user) => ({
    name: user.name,
    email: user.person.email,
    type: user.type,
    profileImageUrl: user.person.avatar_url
  }));
  
  return (
    <div>
      {userInfos.map((userInfo) =>(
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