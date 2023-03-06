import React, { useEffect, useRef, useState } from 'react'
import Card from '../UI/card/Card';

const Timer = () => {
    const [count, setCount]= useState(0);

    const timerId = useRef();

    useEffect(() =>{
   timerId.current = setInterval(()=>{
    setCount((prevState)=> prevState + 1)
   }, 1000);
   return ()=> clearInterval(timerId.current);
    },[])
    useEffect(()=>{
  if (count >= 60) clearInterval(timerId.current);
    },[count]);
  return (
    <Card>
        <div>
            <h1>Timer:{count}</h1>
        </div>
    </Card>
  )
}

export default Timer