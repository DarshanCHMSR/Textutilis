import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


function App() {
  const[mode,setMode]=useState('light');
  const[mode1,setMode1]=useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toogleMode=()=>{
     if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      showAlert("DarkMode has been enabled","success")
     }
     else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("LightMode has been enabled","success")
     }
  }
  const toogleMode1=()=>{
    if(mode1 === 'light'){
     setMode1('grey')
     document.body.style.backgroundColor="green";
     showAlert("DarkMode has been enabled","success");
    }
    else{
      setMode1('light')
      document.body.style.backgroundColor="white"
      showAlert("LightMode has been enabled","success")
     }
 }
    return (
    <>
    
<Navbar title="TextUtils" aboutText="about" mode={mode} toogleMode={toogleMode} toogleMode1={toogleMode1} mode1={mode1}/>
<Alert alert={alert} />
<div className="container">

<TextForm heading="Enter text to analysis below" showAlert={showAlert } mode={mode} mode1={mode1}/>
</div>
<About/>
</>
  );
}

export default App;
