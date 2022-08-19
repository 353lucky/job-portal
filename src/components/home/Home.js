import React from 'react'
import Footer from '../footer/Footer';
import AboutUs from '../AboutUs';
import { Link} from "react-router-dom";

export default function Home() {

  const myStyle={
    marginTop:'190px',
    color:'dodgerblue'
  }
  return (
    <>
       <div className='bg-image homebackground'>
       <div className="container ">
      <div className='row'>
        <div className='col-sm-6'>
          <h1 style={myStyle}>Find out what you like doing,and get someone</h1>
          <p className='big-text'>to pay you for doing it</p>
          <p>Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Necessitatibus perferendis<br/> omnis velit fugit ipsam quis.</p>
          
          <Link to="/login" className="buton button btn btn-warning shadow p-3 mb-5 bg-blue rounded mx-2">
            Explore
          </Link>
          <Link to="/signup" className="buton button btn btn-outline-primary shadow-lg p-3 mb-5 bg-blue rounded mx-2">
            signup
          </Link>
          

        </div>
        <div className='col-sm-6'>
          <div style={{marginTop:95}}>

        <img src={process.env.PUBLIC_URL+"image10.jpg"} alt="mypic"/>
        </div>

        </div>

      </div>
    </div>
       </div>
    
       <AboutUs/>
       {/* <Footer/> */}
       
    </>
  )
}