import React, { Component } from "react";
import avatar from "../img/av_skills.png"
import lakeland from "../img/coll.png"
import springfield from "../img/univ.png"

class Skills extends Component {
    render() {
        return (
            <div className="mb-5 mt-5">
                <div className="textbox bg-secondary mb-4">
                    <h1 className="mb-4">
                        <img src={avatar} />
                        * Skills and Education
                    </h1>
                </div>
    
                <div id="skills" className="textbox bg-secondary mb-4">
                    <b className="bg-white text-danger">This is where the skill items will be rendered.</b>
                </div>

                <div id="skills" className="textbox container bg-secondary mb-4">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title text-center">Lake Land College</h5>
                                    <img className="mx-auto d-block" src={lakeland} />
                                    <p class="card-text text-center mb-0">Mattoon, IL</p>
                                    <p class="card-text text-center mb-0">AAS in IT - Programming</p>
                                    <p class="card-text text-center mb-0">Grad 2015 - 3.2 GPA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title text-center">University of Illinois</h5>
                                    <img className="mx-auto d-block" src={springfield} />
                                    <p class="card-text text-center mb-0">Springfield, IL</p>
                                    <p class="card-text text-center mb-0">BS in Computer Science</p>
                                    <p class="card-text text-center mb-0">Grad 2022 - 4.0 GPA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills