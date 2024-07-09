import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


function App() {
  const[mode,setMode]=useState('info');
  // const[mode1,setMode1]=useState('light');

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
     if(mode === 'info'){
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      showAlert("DarkMode has been enabled","success")
     }
     else{
      setMode('info')
      document.body.style.backgroundColor="white"
      showAlert("LightMode has been enabled","success")
     }
  }
//   const toogleMode1=()=>{
//     if(mode1 === 'light'){
//      setMode1('grey')
//      document.body.style.backgroundColor="green";
//      showAlert("DarkMode has been enabled","success");
//     }
//     else{
//       setMode1('light')
//       document.body.style.backgroundColor="white"
//       showAlert("LightMode has been enabled","success")
//      }
//  }
    return (
    <>
    
<Navbar title="TextUtils" aboutText="about" mode={mode} toogleMode={toogleMode}  />
<Alert alert={alert} />
<div className="container">

<TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" showAlert={showAlert } mode={mode}/>
  <About id="scrollspyHeading1" mode={mode}/>
</div>

</>
  );
}

export default App;
