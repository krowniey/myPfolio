import "./Works.scss"
import { useState } from "react";


export default function Works() {
    const [currentSlide , setCurrentSlide] = useState(0);
    const data = [
        {id:"1",
        icon:"./image/webb.png",
    title:"Frontend Development",
    desc: " Develop functional and appealing web- and responsive applications based on usability, Creating tools that enhance the user’s experience. ",
    img: "./image/landing.png",
    
     link : "https://spinheard.com/ ",
    
},
{
    id:"2",
        icon:"./image/propro.png",
    title:"Project Management",
    desc: " Define, plan, develop, and deliver high-quality work and estimate, manage, and de-risk project budgets and schedules. ",
    img: "./image/sportive.png",
    link : "https://sportive23.com/ ",
},
{
    id:"3",
        icon:"./image/sup.png",
    title:"Technical Support",
    desc: "Communicating with clients to identify their needs, optimizing, running tests and troubleshoot unique software and applications .",
    img: "./image/support.jpg",
},
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
         setCurrentSlide(currentSlide < data.length -1 ?  currentSlide + 1 :0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 84 }vw)`}}>
                {data.map((d) => (

                

               
                <div className="container">
                    <div className="item">
                        <div className="left">

                            <div className="leftcontainer">
                                <div className="imagecontainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                
                                <p>  {d.desc} </p>
                            <a href={d.link} target="_blank" rel="noreferrer">Project</a>
                        
                            </div>


                        </div>
                        <div className="right">
                            <img src={d.img} alt=" #"/>
                        </div>
                    </div>
                </div>))}
            </div>
           
            <img src="image/downarrow.png"  className="arrow left"  alt="" onClick={()=>handleClick("left")}/>

            <img src="image/downarrow.png"  className="arrow right"  alt=""  onClick={()=>handleClick()}/>
        </div>
    );
}
