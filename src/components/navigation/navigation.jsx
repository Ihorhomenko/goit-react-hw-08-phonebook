import { NavLink } from "react-router-dom";
import './navigation.css'

// const getClassName = ({isActive}) => {
//     const className = isActive ? "item active" : "item";
//     return className;
// }

export const Navigation = () => {
    return (
            <ul className="listlink">
                <li>
                    <NavLink to="/" className="item">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/phonebook" className="item">Phonebook</NavLink>
                </li>
            </ul>
    )
}