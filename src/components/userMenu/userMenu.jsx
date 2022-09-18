import { NavLink } from "react-router-dom";
import '../navigation/navigation.css'

export const UserMenu = () => {
    return (
        <ul className="listlink">
                <li>
                    <NavLink to="/login" className="item">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/registration" className="item">Registration</NavLink>
                </li>
            </ul>
    )
}