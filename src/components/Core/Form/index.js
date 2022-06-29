import React from 'react';
import { Button } from '~styled';


const Form =({children,hname,hvalue,...rest})=> {
    return <form {...rest} 
    name={hname}
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
      <input type="hidden" name={hname} value={hvalue} />
      {children}</form>
}
Form.Input = ({text,name,placeholder,id,...rest}) => {
    return(
        <input type={text} name={name} placeholder={placeholder} id={id} {...rest} className="form-control"/>
    )
}
Form.Label = ({target,children,...rest}) => {
    return (
      <label htmlFor={target} {...rest}>
        {children}
      </label>
    )
}
Form.Group = ({children,className,...rest}) => {
    return (
      <div className={`form-group position-relative ${className}`} {...rest}>
        {children}
      </div>
    )
}
Form.Button = ({value ,...rest}) => {
    return (
      <Button as="button" {...rest}>
        {value}
      </Button>
    )
}


export default Form;