import React from "react";
import "../Mystyle.css"


function Navebar (){
    return(
     <div>
        <nav>
            <label className="logo">My Logo</label>
            <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Images</a></li>
                <li><a href="#">About </a></li>
                <li><a href="#">Feedback</a></li>

            </ul>
        </nav>
     </div>
    )
}
export default Navebar;