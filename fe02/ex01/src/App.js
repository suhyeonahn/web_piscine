import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchPage();
        setPage(result);
      } catch (e) {
        console.error(e);
      }
    })();
  },[]);

 const fetchPage = async () => {
  const databaseId = '431e8715772a4cb68215378f717534c6';
  const response = await axios.get(`/api/databases/${databaseId}/query`, {
    sort: {
      direction: 'descending',
      timestamp: 'created_time'
    },
    properties: ['title', 'url', 'created_time', 'last_edited_time']
  });
  return response.data.results;
}

return (
    <div>
        <div key={page.id}>
          <p>Url: {page.url}</p>
          <p>Created time: {page.created_time}</p>
          <p>Last edited time: {page.last_edited_time}</p>
        </div>
    </div>
  );
}

export default App;