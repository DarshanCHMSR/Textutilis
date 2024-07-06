import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const[mode,setMode]=useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
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
    return (
    <>
<Navbar title="TextUtils" aboutText="about" mode={mode} toogleMode={toogleMode}/>
<Alert alert={alert}/>
<div className="container">
<TextForm heading="Enter text to analysis below" mode={mode}/>
</div>
<About/>
</>
  );
}

export default App;
