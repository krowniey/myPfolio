import { useState } from "react";
import "./Contacts.scss"

export default function Contacts() {
    const [message , setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img  src="image/shake.png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email" />
                    <textarea  placeholder="Message"></textarea>
                    <button type="submit"> Submit</button>
                    {message && <span>thanks, I will reply ASAP </span>}
                </form>
            </div>

        </div>
    )
}
