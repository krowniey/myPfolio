import React from 'react';
import './Testimonials.scss';



export default function Testimonials() {
    const data = [
        {id:"1",
         code :"image/html.png",
        title:"Website Development",
        img: "./image/reactjs.png",
        icon:"./image/css.png",
    
    desc: "I am a Frontend web developer and build websites using HTML, CSS, Javascript, ReactJs  I have also good graps of Bootstrap, SCSS and styled component ",
   
},
{id:"2",
code :"image/github.png",
title:"Project Management",
img: "./image/PRO.png",
icon:"./image/TRELLO.png",

desc: "I also have decent hand on succefully managed project making use of tools like MS Office,Trello,Github,figma/figjam and many more to Create, Plan, Organise and Track.  ",
featured: true,
},
{id:"3",
code :"image/support.png",
title:"Technical Support",
img: "./image/tech.png",
icon:"./image/support2.png",

desc: "Responsible for unboarding, assisting client with technical issues,through calls or communicating through messaging platforms.",
 
},
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Expertise</h1>
            <div className="container">
                {data.map((d) =>(

               
                <div className={d.featured ? "card featured" : "card" }>
                    <div className="top">
                        <img className="left" src ={d.code} alt=""/>
                        <img className="user"  src ={d.img} alt=""/>
                        <img  className=" right" src = {d.icon} alt=""/>
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        
                            <h4>{d.title}</h4>
                    </div>
                </div>
                 ))}
            </div>
        </div>
    )
}
