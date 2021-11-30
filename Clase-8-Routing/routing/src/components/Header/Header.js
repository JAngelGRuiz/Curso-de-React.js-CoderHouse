import './index.css'
import { useContext } from 'react'
import UserContext from '../../context/context'

export const Header = () => {

    const { getUsers } = useContext(UserContext)

    return(
        <div className="header-container">
            <button onClick={() => getUsers()}>Refrescar</button>
        </div>
    )
}