import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 

  const [changeStyle,setChangeStyle] = useState("");
  useEffect(() =>{
    setChangeStyle("redColor");
  },[])
  // setChangeStyle("redColor")
  const clickHandle = () => {
  
    if(changeStyle === "redColor"){
      setChangeStyle("blueColor")
    }
    else{
      setChangeStyle("redColor")
    }
      
    
    
  }
  return (
    <div id="main">
      <p className={changeStyle} >Newton School</p>
      <button id='button' onClick={clickHandle}>Change Style</button>
    </div>
  )
}


export default App;
