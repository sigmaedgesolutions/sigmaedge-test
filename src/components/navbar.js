import React from "react";
import "../Mystyle.css";
import { useState } from "react";


const Navebar= ()=>{
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    }; 
    return(
    <div className="App">
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li> 
        </ul>
      </nav>
      {/* <button className="burger-btn" onClick={toggleNav}>
        ☰
      </button> */}
    </header>
    <main>
      <p>Your content goes here.</p>
    </main>
  </div>
    )
}
export default Navebar;