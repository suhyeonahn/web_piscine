import axios from 'axios';

const axios = require('axios');

const getUsers = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://api.notion.com/v1/users',
    headers: {
      'Notion-Version': '2022-02-16',
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  });
  return response.data.results;
}

const users = await getUsers();

const userInfos = users.map(user => ({
  name: user.name,
  email: user.person.email,
  type: user.type,
  profileImageUrl: user.person.avatar_url
}));

function App() {
  return (
    <ul>
    ${userInfos.map(userInfo => `
      <li>
        <img src="${userInfo.profileImageUrl}" alt="${userInfo.name} profile image">
        <div>
          <p>Name: ${userInfo.name}</p>
          <p>Email: ${userInfo.email}</p>
          <p>Type: ${userInfo.type}</p>
        </div>
      </li>
    `).join('')}
  </ul>
  );
}

export default App;