import React from 'react'
import Form from '../components/form/Form'

const Register = () => {
    const UserId = "UserId"
    const usertype= "text"


    const email = "Enter Password"
    const emailType = "email"
  return (
    <div>

        <h2>For register</h2>
        <Form type={usertype} placeholder={UserId}/>
        <Form type={emailType} placeholder={email}/>
      
    </div>
  )
}

export default Register
