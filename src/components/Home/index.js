import {Link} from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";



const Home= ()=> {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = [" ","W", "i", "l", "l", "i", "a", "m"]

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass("text-animate-hover")
    //     }, 4000)
    // }, [])
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/><br/> 
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>

            </div>
        </div>

    )

}
export default Home