import React from 'react'
import Form from '../components/form/Form'

const Login = () => {
    const email = "Enter Email"
    const emailType = "email"
  return (
    <div>
        <h3>This is for Login</h3>
        <Form type={emailType} placeholder={email}/>
      
    </div>
  )
}

export default Login
