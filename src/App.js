import React, {useState,useEffect} from 'react';
import './App.css';
import Pages from './pages/index'

function App() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
    fetch('https://gitconnected.com/v1/portfolio/touhoupolice')
    .then(response=>response.json())
    .then(user=>{
      setUser(user)
    })
  },[])

  if(!user){
    return (<div>Nothing found</div>)
  }
  return (<Pages user={user}/>);
}

export default App;
