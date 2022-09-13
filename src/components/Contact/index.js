import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import {useState, useEffect} from "react"


const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])


    return(
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "Me"]} idx={15}/>
                </h1>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact