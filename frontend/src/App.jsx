import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginExample from './loginExample';
import SignUpExample from './singUpExample';
import RecoveryPassword from './recovery';
import { RecoveryPassword2 } from './recovery2';
import Buttons from './Buttons';
import Home from './page';
import Users from './users';

function App() {
  return (
    <Router>
      <div className=" m-0 to-white-200 w-screen h-screen flex justify-center items-center bg-[url('https://w.wallhaven.cc/full/gp/wallhaven-gpyrmq.jpg')]">
        <Routes >
          {"/"}
          <Route path="/" element={<Buttons />} />
          <Route path='/LoginExample' element={<LoginExample />} />
          <Route path='/SignUpExample' element={<SignUpExample />} />
          <Route path='/RecoveryPassword' element={<RecoveryPassword />} />
          <Route path='/RecoveryPassword2' element={<RecoveryPassword2 />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Users' element={<Users/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;