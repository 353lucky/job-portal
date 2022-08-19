import React from 'react'
import "./SignUp.css"
// import { useRef } from "react";
import { Link} from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Form, Button, Card,  Container, Alert } from "react-bootstrap";


function SignUp() {
    const[username,setUsername]=useState("")
    const[email,setEmail] = useState("");
    const[password,setPassword]=useState("");
    const[empType,setEmpType] = useState("");
    const [error , setError] = useState(""); 
    const navigate = useNavigate();
    // const[direct,setDirect] = useState(false)





    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const emp_type1 = (e) => {
        setEmpType("JobSeeker")
    }

    const emp_type2 = (e) => {
        setEmpType("Employer")
    }


    // const LoginSubmit = async () => {
    //     await fetch('http://localhost:1337/api/auth/local', {
    //         method: 'POST',
    //         header: {'Content-Type':'application/json'},
    //         credentials: 'include',
    //         body: JSON.stringify({
    //             username,
    //             email
    //         })
    //     });
    //     return true;
    // }

    const setUserDetails = async() => {
        // if (LoginSubmit()){
        //     alert("User Alreaddy Exists")
        // }
            axios.post('auth/local/register',{
                username :username,
                email:email,
                password: password,
                empType : empType
                

            })
            .then(response => {
                console.log("Successful")
                console.log(empType)
            })
            .catch(error =>{
                setError("Email Or Name Already Exists")
                console.log("error",error.response)
            });
            if(empType === "JobSeeker"){
                navigate('/jobseeker')
            }
            else{
                navigate('/employer')
            }

        
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
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form >
          <Form.Group id="username">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={changeUsername} type="text" ></Form.Control>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={changeEmail} type="email" ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={changePassword}></Form.Control>
            </Form.Group><br/>
            <div>
            <p>Please Select Your Emplyee Type:</p>
            <input type="radio" onChange= {emp_type1} id = "JobSeeker" name="emp_type" value="JobSeeker"/>
            <label for="JobSeeker">JobSeeker</label><br/>
            <input type="radio" onChange = {emp_type2} id = "employer" name="emp_type" value="Employer"/>
            <label for="Employer">Employer</label><br/>
            </div><br/>

            <Button  className="w-100" onClick={setUserDetails}>
              SignUp
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already Have An Account ? <Link to="/login">Sign In</Link>
      </div>
      </div>
      </Container>
      </div>
    </>



  )
}

export default SignUp