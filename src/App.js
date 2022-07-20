import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let Time = new Date().toLocaleTimeString();
const [ctime,setTime]=useState(Time);
  const upDateTime=()=>{
    Time=new Date().toLocaleTimeString();
    setTime(Time);
  }
setInterval(upDateTime,100);
  return (
   <div className='box' >

<h1>{ctime}</h1>
{/* <button onClick={upDateTime}>CLICK ANYWHERE</button */}



   </div>
  );
}

export default App;
