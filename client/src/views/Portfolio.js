import React, { Component } from "react";
import avatar from "../img/av_works.png"

class Portfolio extends Component {
    render() {
        return (
            <div className="mb-5 mt-5">
                <div className="textbox bg-secondary mb-4">
                    <h1 className="mb-4">
                        <img src={avatar} />
                        * Personal Work
                    </h1>
                </div>
    
                <div id="portfolio" className="textbox bg-secondary mb-4">
                    <b className="bg-white text-danger">This is where the portfolio items will be rendered.</b>
                </div>
            </div>
        )
    }
}

export default Portfolio