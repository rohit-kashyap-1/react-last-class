import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Query from './components/Query';
import Uncontrolled from './components/Uncontrolled';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
            <nav className='navbar'>
              <Link to={'/home'} className='nav-link'>Home</Link>
              <Link to={'/about'} className='nav-link'>About </Link>
              <Link to={'/services'} className='nav-link'>Services</Link>
              <Link to={'/users'} className='nav-link'>Users</Link>
              <Link to={'/query?name=john&email=hello@abcd.com'} className='nav-link'>Query Param</Link>
              <Link to={'/uncontrolled'} className='nav-link'>Uncontrolled</Link>

            </nav>

            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/users' element={<Users />}></Route>
              <Route path='/users/:id' element={<User />}></Route>
              <Route path='/query' element={<Query />}></Route>
              <Route path='/uncontrolled' element={<Uncontrolled />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
