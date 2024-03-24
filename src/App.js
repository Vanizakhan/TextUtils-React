import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from "react";



function App() {

const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null)

const showAlert=(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500)
}

const toggleMode=()=>{
  if(mode === 'light'){
    setMode("dark");
    document.body.style.backgroundColor = "#042743";
  }else{
    setMode("light")
    document.body.style.backgroundColor = "white"

  }
}
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"  mode={mode}/>
    {/* <About heading="About Us" mode={mode}/>         */}
    </div>
 </>
  );
}

export default App;
