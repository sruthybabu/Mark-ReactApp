import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addmark from './components/Addmark';
import Viewmark from './components/Viewmark';

function App() {
  return (
    <div>
      <Addmark/>
      <Viewmark/>
    </div>
  );
}

export default App;
