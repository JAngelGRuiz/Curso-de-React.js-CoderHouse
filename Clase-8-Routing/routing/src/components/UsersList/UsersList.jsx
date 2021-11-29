import { UserCard } from "../UserCard/UserCard"
import './index.css'

const UsersList = ({ users, setCurrentUser }) => {
    return(
        <div className="cards-list-container">
            {
              users.map((user) => {
                return (
                 <UserCard user={user} setCurrentUser={setCurrentUser} />
                )
               })
            }
        </div>
    )
}

export default UsersList