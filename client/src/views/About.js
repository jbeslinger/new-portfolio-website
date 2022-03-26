import React, { Component } from "react";
import avatar from "../img/av_about.png"
import portrait from "../img/portrait.png"

class About extends Component {
    render() {
        return (
            <div className="mb-5 mt-5">
                <div className="textbox bg-secondary mb-4">
                    <h1 className="mb-4">
                        <img src={avatar} className="text-center" />
                        * About Me
                    </h1>
                </div>
    
                <div className="textbox bg-secondary mb-4">
                    <img className="img-thumbnail mx-auto d-block" src={portrait} />
                    <p>* I’m a computer programmer and game developer in Illinois and Indiana. My biggest passions lie in videogames, apps, and computer software. Computers have the awesome ability to greatly improve the life quality of those that use them. They can do perform a seemingly unlimited amount of tasks from sorting out your budget on a spreadsheet to making you feel empathy for an array of pixels on a screen. It is a sincere privilege to be able to speak computer language.</p>
                    <p>* I’m well-organized, self-motivated, hard working, ambitious… and a pretty chill dude.</p>
                    <p>* Outside of my office: I’m a student, cook, pixel artist, and all-around hobbyist!</p>
                    <p>* I’m interested in working on ambitious projects with positive people and I’m always excited to learn something new. Always on the look out for a new project to burn daylight on!</p>
                </div>
            </div>
        )
    }
}

export default About