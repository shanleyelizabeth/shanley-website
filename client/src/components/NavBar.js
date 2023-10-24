import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink to="about">About</NavLink>
            <NavLink to="portfolio">Portfolio</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </div>
    )
}

export default NavBar