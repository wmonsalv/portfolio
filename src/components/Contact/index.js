import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import {useState, useEffect, useRef} from "react"
import emailjs from "@emailjs/browser"



const Contact = () => {

    const refForm = useRef();

    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('williammonsalve923', 'template_kpd2sdt', refForm.current, 'rZaRgDLJMUtYI1kEl')
          .then(
            () => {
                alert("Message was sent successfully!")
                window.location.reload(false)
            },
            () => {
                alert("Failed to send message, please try again")
            }
          )
        //   e.target.reset()
      };


    return(
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "Me"]} idx={15}/>
                </h1>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
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