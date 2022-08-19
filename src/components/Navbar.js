import React , { useContext } from 'react'
import { Link } from "react-router-dom";
import { TContext } from "../Context";
import {useNavigate} from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [token, setToken , userdetails ,setUserdetails] = useContext(TContext);
  const LogoutSubmit = async (e) => {
    e.preventDefault();
    setToken("")
  }
  if (!token){
    if (token && userdetails.empType === "JobSeeker" ){
      navigate('/')
      // console.log(userdetails)
  }
  }
  return (
    <>
    {token ? <><nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#Home">IA WORKS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <Link to='/'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        </Link>
          
            <Link to='/Cards'>
            <li className="nav-item">
              <a className="nav-link active" href="#Products">Products</a>
            </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link active" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Contact</a>
            </li>
          </ul>
          
          {/* <div className='buttons'>
            <a href="#Login" className='btn btn-outline-light'>
              <i className='fa fa-sign-in me-1'></i> Logout</a>         
          </div> */}
          {/* <Link to='/'> */}
          <div className='buttons'>
            <a  className='btn btn-outline-light ms-2' onClick={LogoutSubmit}>
              <i className='fa fa-user-plus me-1'></i> Logout</a>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </nav></> : <><nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#Home">IA WORKS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <Link to='/'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        </Link>
          
            <Link to='/Cards'>
            <li className="nav-item">
              <a className="nav-link active" href="#Products">Products</a>
            </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link active" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Contact</a>
            </li>
          </ul>
          <Link to='/Login'>
          <div className='buttons'>
            <a href="#Login" className='btn btn-outline-light'>
              <i className='fa fa-sign-in me-1'></i> Login</a>         
          </div>
          </Link> 
          <div className='buttons'>
            <a href="Signup" className='btn btn-outline-light ms-2'>
              <i className='fa fa-user-plus me-1'></i> Register</a>
          </div>
        </div>
      </div>
    </nav></>}
    
    
        </>
  )
}

export default Navbar