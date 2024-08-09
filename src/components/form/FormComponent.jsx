import React from 'react'

const FormComponent = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        {
            props.type === 'register' ?
            <input type="text" name='name' placeholder="Enter Name"/>
            : <></>

            //if we dont want to use else then use && like this:
            // props.type === 'register' &&
            // <input type="text" name='name' placeholder="Enter Name"/>
            // 


        }
        <form action=''>
        
            <input type="email" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <input type="button" value={props.btnText}/>

        </form>
      
    </div>
  )
}

export default FormComponent
