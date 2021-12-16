import "./Menu.scss";

export default function menu({menuOpen, isMenuOpen}) {
    return (
        <div className= {"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=>isMenuOpen(false)}>Home</a>
                     
                </li>
                <li>
                    <a href="#portfolio" onClick={()=>isMenuOpen(false)}>Portfolio</a>
                     
                </li>
                <li>
                    <a href="#works" onClick={()=>isMenuOpen(false)}>Works</a>
                     
                </li>
                <li>
                    <a href="#testimonials" onClick={()=>isMenuOpen(false)}>Testimonials</a>
                     
                </li>
                <li>
                    <a href="#contact" onClick={()=>isMenuOpen(false)}>Contact</a>
                     
                </li>
            </ul>
        </div>
    )
}
