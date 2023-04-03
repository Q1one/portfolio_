import "./LandPage.css"

import { GrReactjs } from "react-icons/gr";
import { GrHtml5 } from "react-icons/gr";
import { GrCss3 } from "react-icons/gr";
import { GrNode } from "react-icons/gr";

function LandPage() {
    return (
        <div className="LandPage" id="LandPage">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
            </style>
            <div className="LPleft">
                <span>J</span>
                <span>O</span>
                <span>S</span>
                <span>E</span>
                <span>P</span>
                <span>H</span>
                <span>'s</span>
            </div>
            <div className="LPright">
                <div className="icons">
                    <div className="row">
                        <GrHtml5 className="icon"/>
                        <GrCss3 className="icon"/>
                    </div>
                    <div className="row">
                        <GrReactjs className="icon"/>
                        <GrNode className="icon"/>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandPage