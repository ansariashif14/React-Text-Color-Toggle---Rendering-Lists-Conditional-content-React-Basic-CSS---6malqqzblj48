import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  
  const [changeStyle,setChangeStyle] = useState("");
  useEffect(() =>{
    setChangeStyle("redColor");
  },[])
  // setChangeStyle("redColor")
  const toggleHandler = () => {
  
    if(changeStyle === "redColor"){
      setChangeStyle("blueColor")
    }
    else{
      setChangeStyle("redColor")
    }
  
//code here 
  return (
    <div id="main">
      <p className={changeStyle}>Newton School</p>
      <button id='button' onClick={toggleHandler}>Change Style</button>
    </div>
  )
}


export default App;
