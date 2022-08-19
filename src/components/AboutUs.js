import React from 'react'

  const myStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };


function AboutUs() {
  return (
    <>
    {/* <div className='bg-image'> */}
    <div>
      <div className="container">
        <div className='row'>
          <div className='col-sm-6'>
            <h1 style={myStyle}>IA labs</h1>
            <p className='big-text'>IA labs, dolor</p>
            <p>IA labs works closely to bridge the gap between talent and opportunities and offers end-to-end recruitment solutions.
               IA labs Job Fair brings candidates and top employers under one roof. While  HR Conclave brings top HR leaders to share insights on latest trends, innovations and best practices in the HR industry. 
              IA labs also has a large reach through its print product, Shine Jobs – the Tuesday Job supplement of Hindustan Times– making it the only job portal with an integrated print and online offering</p>
            {/* <Link to="/about" className="btn btn-primary mx-2">
            login
          </Link> */}
            {/* <button className="btn btn-primary mx-2" >Signup</button> */}

          </div>
          <div className='col-sm-6'>
            <div style={{ marginTop: 5 }}>

              <img src={process.env.PUBLIC_URL + "image1.png"} alt="mypic" />
            </div>

          </div>

        </div>
      </div>
      </div>
    {/* </div> */}
      
    </>
  )
}

export default AboutUs