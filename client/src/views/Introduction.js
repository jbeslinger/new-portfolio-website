import React, { Component } from "react";
import avatar from "../img/av_day1.png"

class Introduction extends Component {
    render() {
        return (
            <div>
                <div className="textbox bg-secondary mb-4">
                    <h1 className="mb-4">
                        <img src={avatar} />
                        * "Yo! I'm Josh.
                    </h1>
                    <i>* Video Game Developer / Player, Freelance Programmer, Tinkerer</i>
                </div>
    
                <div className="textbox bg-secondary mb-4">
                    <p>* Welcome to my website.</p>
                    <p>* Everything here was built from scratch in <code>Node.js</code>.</p>
                    <p>* In fact, you can read the source code <a href="https://github.com/jbeslinger/new-portfolio-website">here</a> if you're bored!</p>
                    <p>* There's a lot to see, so have a look around! 😎</p>
                </div>
            </div>
        );
    }
}

export default Introduction;