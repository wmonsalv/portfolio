import "/Users/william_x1/portfolio/src/components/Sidebar/indexSidebar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <image src={"/Users/william_x1/portfolio/src/assets/images/logo-s.png"} alt="logoS"/>
            <image className="sub-logo" src={"/Users/william_x1/portfolio/src/assets/images/logo_sub.png"} alt="logoSubtitle"/>
        </Link>
        <nav>
            <navLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="white"/>
            </navLink>
            <navLink exact="true" activeclassname="about-link" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} className="a" color="white"/>
            </navLink>
            <navLink exact="true" activeclassname="contact-link" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="white"/>
            </navLink>
        </nav>
    </div>
)

export default Sidebar

