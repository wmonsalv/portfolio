import "/Users/william_x1/portfolio/src/components/Sidebar/indexSidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => (
    <div className="nav-bar">
        {/* <Link className="logo" to="/">
            <img src={logo} alt="logo"/>
            <img className="sub-logo" src={logoSubtitle} alt="logoSubtitle"/>
        </Link> 
        Note to self: I may come back to try to add the logo*/}
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="about-link" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} className="a" />
            </NavLink>
            <NavLink exact="true" activeclassname="contact-link" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/william-monsalve-9902a4157" >
                    <FontAwesomeIcon icon={faLinkedin} color="#7F7979"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://github.com/wmonsalv" >
                    <FontAwesomeIcon icon={faGithub} color="#7F7979"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar

