import { GrReactjs } from "react-icons/gr";
import { GrHome } from "react-icons/gr";
import { useState } from 'react'

import './NavBar.css'

import NavBtn from './NavBtn'


function NavBar() {
    const [show, setShow] = useState(false);

    function showOption() {
        setShow(!show);
        console.log(show)
    }

    return (
        <div className={show ? "NavBar" : "noBar"}>

            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
            </style>
            <div className={"icon"} onClick={showOption} >
                <GrHome className="home"/>
            </div>

            <div onClick={showOption} className={show ? "showNav" : "hideNav"}>
                <NavBtn url={"#LandPage"} name="I'm Joseph"/>
                <NavBtn url={"#Work"} name="Works"/>
                <NavBtn url={"#Contact"} name="Contact"/>
            </div>
        </div>
    )
}

export default NavBar