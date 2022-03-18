import React from 'react'

export const Footer = () => {
    let Footerstyle={
        position:"fixed",
        bottom:"0px",
        width:"100%"
    }
  return (
    <div className="bg-dark text-light" style={Footerstyle}>
        <p className="text-center">
        Copyright &copy; MyTodosList.com
        </p>
    </div>
  )
}
