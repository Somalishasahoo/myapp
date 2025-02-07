//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import ListEmployees from "./components/ListEmployees";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

    
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('light');

  const showAlert=(message,type)=>{
      setAlert({
      msg:message,
      type:type
      })
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("light mode enabled","success");
    }
    else{
      setMode('light');
       document.body.style.backgroundColor='white'
       showAlert("Dark mode enabled","success");
    }
  }
  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<ListEmployees />} />
                {/* Add other routes for Add, Edit */}
                <Route path="/add" element={<AddEmployee />} />
                <Route path="/edit/:id" element={<EditEmployee />} />
            </Routes>
        </Router>
    <Navbar title="myapp" aboutMe="About us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <TextForm heading="Enter Text To Analyze" mode={mode}/>
    {/* <About/> */}
    </div> 
    </>
  );
}

export default App;
