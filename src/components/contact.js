import React from 'react'
import mail from '../assets/mail.png'

export default class Contact extends React.Component {
  handleSubmit = (e) => {

  }
  render() {
    return (
      <div id="contact" className="w-100 d-table bg-real-dark text-white">
        <h1>Contact</h1>
        <div className="contact">
          
          <img src={mail}style={{ width: '12em', margin: "auto" }}></img>
          <img src={mail}style={{ width: '12em', margin: "auto" }}></img>
          <h1>971-275-2967</h1>
        </div>
      </div>
    )
  }
}