import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { showCursor: false,  
            backDelay:  1500,
            backSpeed:  50,
            strings: [' Front-end Developer', 'Software Support' , 'Product Manager'] })
    }, []) 

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagecontainer">
                    <img src="image/adetutu.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Comfort Owolabi</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                <img src="image/downarrow.png" alt=""/></a>
            </div>
        </div>
    )
}
