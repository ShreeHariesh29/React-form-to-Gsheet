import React from 'react'
import { useState, useRef } from 'react';

function Form() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxFi-QMtsX7lPhoKplEV58u5_TiOW03PDVUAssIV8g4fGlygSGhSSuEvXtXTvZI1feIJg/exec"
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) =>{
      e.preventDefault()
      setLoading(true)

      fetch(scriptUrl, {
      method: 'POST', 
      body: new FormData(formRef.current),

  }).then(res => {
          console.log("SUCCESSFULLY SUBMITTED")
          setLoading(false)
      })
      .catch(err => console.log(err))
  }

return (
      <div className="container">
      <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
      <div className="input-style">
          <label htmlFor='name'>
              Name
          </label>
          <input type="text" id="name"  name="name" placeholder='Your Name *' />
      </div>  
      <div className="input-style">
          <label htmlFor='name'>Email</label>
          <input type="email" name="email" placeholder='Your Email *' />
      </div>
      <div className="input-style">
          <label htmlFor='name'>Phone No</label>
          <input type="number" name="phone" placeholder='Your Phone *' />
      </div>
      <div className="input-style">

          <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
      </div> 
      </form>
      </div>
 
)
}

export default Form