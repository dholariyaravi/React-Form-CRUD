import logo from './logo.svg';
import './App.css';
import Form12 from './Componet/Form12';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dataprnit from './Componet/Dataprnit';
import FormComponent from './FormComponent';
import Login from './Componet/Login';
import Home from './Componet/Home';

function App() {
  return (
    <div className="App">
 
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Form12/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
     </Routes>
     </BrowserRouter>

     {/* <FormComponent/> */}
       
    </div>
  );
}

export default App;
