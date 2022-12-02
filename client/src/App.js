import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/home';
import { Add } from './components/Add';
import { View } from './components/view';
import { Edit } from './components/update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addemp' element={<Add/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
        {/* <Route path='//view/${value.id}' element={<View/>}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
