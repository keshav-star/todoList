import React from 'react'
import "./about.css"

export const About = () => {
    let contacting = {
        display: "flex",
        padding: "20px"
    }
return (
    <div className='container'>
        You can contact Us here
        <div className="contact" style={contacting}>
            <div className="Facebook"><a href="#" class="fa fa-facebook"></a></div>
            <div className="Whatsapp"><a href="#" class="fa fa-whatsapp"></a></div>
            <div className="Twitter"><a href="#" class="fa fa-twitter"></a></div>
            <div className="Instagram"><a href="#" class="fa fa-instagram"></a></div>
        </div>

    </div>
)
}
