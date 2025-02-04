//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


    
function App() {
  return (
    <>
    <Navbar title="myapp" aboutMe="About us"/>
   <div className="container my-3">
    <TextForm heading="Enter Text To Analyze"/>
    </div> 
    </>
  );
}

export default App;
