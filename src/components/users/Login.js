import React, { useState, useContext } from 'react'
import { Form, Button, Card,  Container, Alert } from "react-bootstrap";
import { useRef } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {TContext} from '../../Context'


function Login() {

  // const emailRef = useRef();
  // const passwordRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState(""); 
  const [token, setToken , userdetails ,setUserdetails] = useContext(TContext);
    const navigate = useNavigate();
    // const [direct, setDirect] = useState(false)
    // const emailRef = useRef();
    // const passwordRef = useRef();

  const LoginUsername = (e) => {
    setUsername(e.target.value);
}

const LoginPassword = (e) => {
    setPassword(e.target.value);
}

const LoginSubmit = async (e) => {
    e.preventDefault();
    try{
    const {data} = await axios.post('http://localhost:1337/api/auth/local', {
            identifier : username ,password : password
    },{withCredentials: true});
    


    setUserdetails(data.user)
    setToken(data.jwt)
  }
  catch{
    setError("id or password not correct")
  }

    // axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
  
    // console.log(data.user.username)
    // console.log(data.jwt)

    console.log(token)
    // setDirect(true)
    // console.log(userdetails)
    console.log(error)
    
}

if (token && userdetails.empType === "JobSeeker" ){
    navigate('/jobseeker')
}
if (token && userdetails.empType === "Employer"){
  navigate('/employer')
}


  return (
    <>
    <div className='p-3 mb-2 bg-light text-dark '>
    <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
         <div className="w-100 shadow p-3 mb-5 bg-light rounded border border-primary" style={{ maxWidth: "400px" }}>
 
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={LoginUsername} type="email" ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={LoginPassword}></Form.Control>
            </Form.Group><br/>
            <Button  className="w-100" onClick={LoginSubmit}>
              Log In
            </Button>
          </Form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forget Password</Link>
          </div> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Do not have account ? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </Container>
      </div>
    </>
  )
}

export default Login