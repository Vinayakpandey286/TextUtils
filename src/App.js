// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled","success");
      // document.title="TextUtils-DarkMode"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
      // document.title="TextUtils-LightnMode"
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode}/>}/>
        <Route exact path="/about" element={<About mode={mode}/>} />
    </Routes>
    </div>
   
    </BrowserRouter>
    </>
            
    );
}

export default App;
