import { useSelector } from "react-redux"

export const AuthMenu = () => {
    const userName = useSelector(state => state.auth.user.name)
    return (
        <div>
            <h3>
               {`welcome ${userName}`}
            </h3>
            <button type="button">LogOut</button>
        </div>
    )
}