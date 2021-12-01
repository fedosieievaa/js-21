import React from "react";
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <Link className="nav_item" to="/js-21">Main</Link>
            <Link className="nav_item" to="/post">Posts</Link>
            <Link className="nav_item" to="/gallery">Gallery</Link>
            <Link className="nav_item" to="/contacts">Contacts</Link>
        </div>
    )
}

export default Navigation;