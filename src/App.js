import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addmark from './components/Addmark';
import Viewmark from './components/Viewmark';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addmark/>}/>
        <Route path="/view" exact element={<Viewmark/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
