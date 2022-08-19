import './App.css';
import Home from './components/home/Home';
import SignUp from './components/users/SignUp';
import Login from './components/users/Login';
import Navbar from './components/Navbar';
import JobSeeker from './components/jobSeeker/JobSeeker';
import Employer from './components/employer/Employer';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {TProvider} from './Context'

function App() {
  return (
    <>
    <TProvider>
    <Navbar/>
    {/* <Footer/> */}
    {/* <Home/> */}
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/jobseeker" element={<JobSeeker/>}></Route>
    <Route path="/employer" element={<Employer/>}></Route>
    </Routes>
    </TProvider>
    </>
  );
}

export default App;
