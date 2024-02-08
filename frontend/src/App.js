import  {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Landing from './pages/landing';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/About';
import Contributors from './pages/Contributors';
import Help from './pages/Help';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contributors' element={<Contributors/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
