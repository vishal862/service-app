import React from 'react'
import "../styles/Contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
      <div>
        <h1>Contact</h1>
        <form>
          <div>
            <label>Name:</label>
            <input type='text' placeholder='Enter Your Name'></input>
          </div>
          <div>
            <label>Email:</label>
            <input type='email' placeholder='Enter Your Email'></input>
          </div>
          <div>
            <label>Doubts:</label>
            <input type='text' placeholder='Tell us about your doubts'></input>
          </div>
        </form>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact