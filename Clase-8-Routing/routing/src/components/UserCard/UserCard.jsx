import { Link } from "react-router-dom"
import "./index.css"

export const UserCard = ({ user, setCurrentUser }) => {
    const { username } = user.login
    const { first, last } = user.name
    const { medium } = user.picture

    return(
        <Link 
        to={`/profile/${username}`} 
        onClick={() => setCurrentUser(user)}
        key={username}
        >
          <div className="card-container">
            <img src={medium} alt={`${first}-${last}/${username}`} className="img-card" />  
            <span className="card-title">{first} {last}</span>
          </div>  
        </Link>
    )
}
