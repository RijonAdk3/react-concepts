import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}


//to validate props strictly we use propTypes
Form.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired
}


// to put default props we use defaultProps
Form.defaultProps = {
  type: "password"
}

/**  We can pass multiple props like this directly
 * 
 * const Form = ({type, placeholder}) =>{
 * 
 * return(
 *          <input type={type} placeholder={placeholder}/>
 * )
 * }
 */

export default Form
