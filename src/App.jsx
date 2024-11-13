import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


// import ContrasenaRecover from './pages/ContrasenaRecover'
// import ContrasenaRecover2 from './pages/ContrasenaRecover2'
import LoginExample from './loginExample';
import SignUpExample from './singUpExample';
import Recovery from './recovery';
import Recovery2 from './recovery2'


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log(location)

  return (
    <div className="bg-gradient-to-br m-0 from-sky-200 to-white-200 w-screen h-screen">
      <Routes location={background || location}>
        <Route path='/LoginExample' element={<LoginExample />} />
        <Route path='/SignUpExample' element={<SignUpExample />} />
        <Route path='/RecoveryPassword' element={<Recovery />} />
        <Route path='/RecoveryPassword2' element={<Recovery2 />} />
      </Routes>
    </div>
  );
}

export default App;