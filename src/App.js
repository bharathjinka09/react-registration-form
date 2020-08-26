import React, {useState} from "react";
import "./index.css";

export default function App() {

  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const [submitted, setSubmitted] = useState(false)
  
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastNameInputChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleEmailInputChange = (e) => {
      setValues({...values, email: e.target.value})
    }

    const handleSubmit = e => {
      e.preventDefault()
      if (values.firstName && values.lastName && values.email){
        setValid(true)
      }
      setSubmitted(true)
    }


  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>   
       {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          value={values.lastName}
          onChange={handleLastNameInputChange}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          value={values.email}
          onChange={handleEmailInputChange}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ?<span id="email-error">Please enter an email address</span> : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
