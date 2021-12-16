import "./Topbars.scss";
import logor from '../../logor.png';
import { Person, Mail } from "@material-ui/icons";
export default function Topbars({menuOpen, isMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    
                    <a href="#intro">
                        
                        <img className="logo" src={logor} alt='' />
                    </a>
                    <div className="itemcontainer">
                        <Person className="icon" /><span>+234 813 265 0371</span>
                    </div>
                    <div className="itemcontainer">
                        <Mail className="icon" /><span>comfortowo4@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="handburger" onClick={()=>isMenuOpen(!menuOpen)}><span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
