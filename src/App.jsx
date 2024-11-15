import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginExample from './loginExample';
import SignUpExample from './singUpExample';
import RecoveryPassword from './recovery';
import { RecoveryPassword2 } from './recovery2';
import Buttons from './Buttons';


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br m-0 from-sky-200 to-white-200 w-screen h-screen flex justify-center items-center">
        <Routes >
          {"/"}
          <Route path="/" element={<Buttons />} />
          <Route path='/LoginExample' element={<LoginExample />} />
          <Route path='/SignUpExample' element={<SignUpExample />} />
          <Route path='/RecoveryPassword' element={<RecoveryPassword />} />
          <Route path='/RecoveryPassword2' element={<RecoveryPassword2/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;