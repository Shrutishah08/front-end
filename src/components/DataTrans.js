import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTrans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data').then(response => {
        // setData(response.data);
        console.log("response",response);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.Brand}>{item.Names}</div>
      ))}
    </div>
  );
}

export default DataTrans;
