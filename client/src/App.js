import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/home';
import { Add } from './components/Add';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addemp' element={<Add/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
