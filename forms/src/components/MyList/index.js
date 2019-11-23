import React, {useState, useEffect} from 'react';

let GetMyData = (mystate) => {
  
  fetch('http://localhost:5000/api/names')
  .then(resp => resp.json())
  .then(data => mystate({names : data}))
  .catch(e => console.log(e))

}

function FetchFunction() {

  const [remoteData, setData] = useState({ names: [] });

  useEffect(() => {
    GetMyData(setData)
  }, []) 

  return (
    <ul>
      {remoteData.names.map((n, i) => <li key={i}>{n.name}</li>)}  
    </ul>
  );
}