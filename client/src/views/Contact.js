import React, { Component } from "react";
import avatar from "../img/av_contact.png"

class Contact extends Component {
    render() {
        return (
            <div className="mb-5 mt-5">
                <div className="textbox bg-secondary mb-4">
                    <h1 className="mb-4">
                        <img src={avatar} className="text-center" />
                        * Contact Me
                    </h1>
                </div>
    
                <div className="textbox bg-secondary mb-4">
                    <p>* I'm interested in freelance work opportunities, fan projects, pitches, and job offers!</p>
                    <h5 className="text-center mb-4">Feel free to reach out!</h5>
                    <form id="frm-mailme">

                        <div className="form-group mb-4">
                            <label for="exampleInputEmail1">Email address</label>
                            <input id="txt-email-address" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required />
                        </div>
                        
                        <div className="form-group mb-4">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea id="txt-email-body" className="form-control" rows="5" required />
                        </div>
                        
                        <button type="submit" className="btn btn-primary mx-auto d-block">Send</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Contact