import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white p-2 px-4'>{props.text}</button>
    //<button className {`p-2 px-4 rounded-md text-white ${props.bgColour}`}>{props.text}</button>
  )
}

export default Button
