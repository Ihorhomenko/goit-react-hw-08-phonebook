import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import './navigation.css'

// const getClassName = ({isActive}) => {
//     const className = isActive ? "item active" : "item";
//     return className;
// }

export const Navigation = () => {
    const isLogedIn = useSelector(state => state.auth.isLoggedIn)
    return (
        <div className="listlink">
            <NavLink to="/goit-react-hw-08-phonebook" className="item">Home</NavLink>
            {isLogedIn && <NavLink to="/phonebook" className="item">Phonebook</NavLink>}
        </div>
    )
}