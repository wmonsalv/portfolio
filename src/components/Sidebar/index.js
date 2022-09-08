import "/Users/william_x1/portfolio/src/components/Sidebar/indexSidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "/Users/william_x1/portfolio/src/assets/images/William.png"
import logoSubtitle from "/Users/william_x1/portfolio/src/assets/images/logo_sub.png"


const Sidebar = () => (
    <div className="nav-bar">
        {/* <Link className="logo" to="/">
            <img src={logo} alt="logo"/>
            <img className="sub-logo" src={logoSubtitle} alt="logoSubtitle"/>
        </Link> */}
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
    </div>
)

export default Sidebar

