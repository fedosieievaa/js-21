import React from "react";

const Main = ({picture, description}) => {
    return(
        <div>
            <img className="main_picture" src={picture} alt="main" />
            <p className="main_description">{description}</p>
        </div>
    )
}

export default Main;