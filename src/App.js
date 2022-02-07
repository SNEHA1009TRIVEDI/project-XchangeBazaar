import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'; 
import About from './Components/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('dark'); 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      //showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutus="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">   
  
    <TextForm heading="Enter The Text To Analyze Below" toggleMode={toggleMode}/>
{/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
