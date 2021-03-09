import React from 'react'
import mail from '../assets/mail.png'
import linkedin from "../assets/linkedin.png"
export default class Contact extends React.Component {
  handleSubmit = (e) => {

  }
  render() {
    return (
      <div id="contact" className="w-100 d-table bg-light-green">
        <div className="contact box  mx-auto d-table-cell align-middle">
          <h1>Let's Get In Touch</h1>
          <a href="mailto:nicklevenson@gmail.com?subject=Reaching Out to Nick" className="m-5"><img src={mail}style={{ width: '12em', margin: "auto"}}></img></a>
          <a href="https://www.linkedin.com/in/nicholas-levenson-b3a927b2/" className="m-5" target="_blank"><img src={linkedin}style={{ width: '10em', margin: "auto"}}></img></a>
          <br/>
          <br/>
          <h1>971-275-2967</h1>
        </div>
      </div>
    )
  }
}