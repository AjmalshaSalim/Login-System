import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
    <Router>
  <Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/' element={<Home data="Ajmalsha"/>}/>
  </Routes>
</Router>
    </div>
  );
}
export default App;
