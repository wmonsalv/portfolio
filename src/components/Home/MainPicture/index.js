import "./index.scss";
// import portfolioImage from "../../../assets/images/IMG_5865.png";

const MainPicture = () => {
    return(
        <div className="picture-container">
            <img className="image" src={require("/Users/william_x1/portfolio/src/assets/images/portfolioResized2.png")} alt="William"/>
        </div>
    )
}

export default MainPicture

