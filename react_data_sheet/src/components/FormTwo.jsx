import React from 'react'
import { useState, useRef } from 'react';

function FormTwo() {
    const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxQ8E7FIevmdRqdnAKk-wq4gf2cg3wi5n5EWGVG7YQ4hpe3VrdHtYP8Msi0lKokioA6/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Successfully submitted");
          alert("Form submitted successfully!");
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((err) => {
        console.error("There was a problem   with the submission:", err);
        alert("Form submission failed, please try again.");
      })
      .finally(() => {
        setLoading(false);
        formRef.current.reset(); // Reset the form after submission
      });
  };
  return (
    <div style={{width:'100vw',border:'1px solid gray', display:'flex', justifyContent:'center',height:'300px'}}>
        <form style={{width:'850px',border:'1px gray solid ', display:'flex', justifyContent:'center'}}>
            <div style={{marginTop:'50px'}}>
            <label >Name :</label> <br />
            <input type="text" /><br />
            <label >Email</label> <br />
            <input type="text" /><br />
            <label >Phone</label><br />
            <input type="text" /> <br />
            <button type='submit' style={{width:'100px', height:'30px', margin:'10px 0px 0px 35px ',cursor:'pointer'}}>submit</button>
            </div>
        </form>
        <div className="container">
      <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
        <div className="input-style">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name *"
            required
          />
        </div>
        <div className="input-style">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email *"
            required
          />
        </div>
        <div className="input-style">
          <label htmlFor="phone">Phone No</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone *"
            required
          />
        </div>
        <div className="input-style">
          <label htmlFor="phone">msg :</label>
          <input
            type="tel"
            id="message"
            name="message"
            placeholder="Any quieries "
            required
          />
        </div>
        <div className="input-style">
          <input
            type="submit"
            value={loading ? "Loading..." : "SEND MESSAGE"}
            disabled={loading}
          />
        </div>
      </form>
    </div>
    </div>
  )
}

export default FormTwo