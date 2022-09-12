import "./index.scss";
import AnimatedLetters from "../AnimatedLetters"
import {useState, useEffect} from "react"

const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])


    return (

        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={["A", "b", "o", "u", "t", " ", "M", "e" ]}
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
        </div>

    )
}

export default About