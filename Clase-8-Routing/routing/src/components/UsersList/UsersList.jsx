import { UserCard } from "../UserCard/UserCard"
import './index.css'
import { useContext } from "react"
import UserContext from '../../context/context'

const UsersList = ({ setCurrentUser }) => {
    const { users } = useContext(UserContext)
    return(
        <div className="cards-list-container">
            {
              users.map((user) => {
                return (
                 <UserCard 
                 key={user.login?.username} 
                 user={user} 
                 setCurrentUser={setCurrentUser} 
                />
                )
               })
            }
        </div>
    )
}

export default UsersList