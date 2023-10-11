import React,{useState} from 'react'
import './App.css'
import { Rating } from './components/Rating'
import { Submitted } from './components/Submitted'

function App() {
 
  const [rate, setRate]=useState(0);
  const [finish,setFinish]=useState(false);

  return (
    <>
    {finish ? 
    (<Submitted rated={rate}/>):
    
    <Rating rate={rate} setRate={setRate} finish={finish} setFinish={setFinish}/>
    }
    </>
    
  )
}

export default App
