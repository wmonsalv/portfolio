import "./index.scss";
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";


const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])


    return (

        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
                        idx={15}
                    />
                </h1>
                <p>
                    My name is William Monsalve, I'm a senior at Kennesaw state University majoring in Computer Science. I'm aspiring to graduate in Spring of 2023.
                </p>
                <p>
                    Due to my interest in improving my programming skills, I have some expertise with front end development. I'm familiar with React.js, React Native, HTML, CSS, SASS, JavaSCript, Python, Java, and C++.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031"></FontAwesomeIcon>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJava} color="#7393B3"/>
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#5DE4D4"/>
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faPython} color="white"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About