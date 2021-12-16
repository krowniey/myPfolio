import PortfolioList from "../portfolioList/portfolioList";
import "./Portfolio.scss";
import { useEffect, useState } from "react";
import { featuredPortfolio, webPortfolio, projectmPortfolio } from "../../data";

export default function Portfolio() {
const [selected, setSelected] = useState([ ]);
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "website",
            title: "Web Developement",
        },
        {
            id: "project managment",
            title: "Project Managment",
        }
 
        
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "website":
                setData(webPortfolio);
                break;
            case "project management":
                setData(projectmPortfolio);
                break;
                
            default:
                setData(featuredPortfolio);
        }


    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>

                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                )

                )}

            </ul>
            <div className="container">
                {data.map(d=>(

               
                <div className="item">
                    <img src= {d.img}/>
                    <h3>{d.title}</h3>
                
                </div>
                 ))}
            </div>
        </div>
    )
}
