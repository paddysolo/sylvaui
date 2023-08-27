import arrow from "./../../../assets/arrowlook.png"

import "./component.css"
export const ScrollDown =()=>{
    return (
      <a className="home-scroll-button" >
        <span className="home-scroll-button__inner">
         <img src={arrow} alt="arrowdown" />
          {/* <span className="home-scroll-button__text">
            Scroll down
          </span> */}
        </span>
      </a>
    )
}