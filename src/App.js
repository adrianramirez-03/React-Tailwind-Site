import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Support from './components/Support'
import Faq from './components/Faq'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<><Navbar/><Hero/><About/><Support/><Faq/></>}/>
            <Route path='/login' element={<><Navbar/><Login/></>}/>
            <Route path='/signup' element={<><Navbar/><Signup/></>}/>
          </Routes>
      </Router>

    </>
  );
}

export default App;
