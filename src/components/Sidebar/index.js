import "./index.scss";
import { Link } from "react-router-dom";


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <image src={"/Users/william_x1/portfolio/src/assets/images/logo-s.png"} alt="logoS"/>
        </Link>
    </div>
)

export default Sidebar

