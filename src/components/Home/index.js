import {Link} from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import MainPicture from '/Users/william_x1/portfolio/src/components/Home/MainPicture/index.js'



const Home= ()=> {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = [" ","W", "i", "l", "l", "i", "a", "m"]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _13`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/><br/> 
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
          <MainPicture/>
        </div>

    )

}
export default Home