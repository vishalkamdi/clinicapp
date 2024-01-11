import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes ,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import NewClinic from './components/doctor/NewClinic';
import AllClinics from './components/doctor/AllClinics';
import Apointments from './components/doctor/Apointments'


function App() {
  const user = useSelector(state=>state.authInfo.value)
  return (
    <>
      
  <Nav />
    <Routes>
     
    {user.isLogin ? <>
        {user.type == "doctor" ? <>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>

          <Route path='/newClinic' element={<NewClinic />}></Route>
          <Route path='/allClinics' element={<AllClinics />}></Route>
          <Route path='/allApointments' element={<Apointments />}></Route>
        </> : <></>}


      </> : <>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route></>}


    </Routes>
  
  <Footer />
    </>
  );
}

export default App;
