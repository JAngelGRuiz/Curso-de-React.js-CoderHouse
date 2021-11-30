import React, { useEffect, useState } from 'react'

const Context = React.createContext()

export function UserContext({ children }){

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
      fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => setUsers(data.results))
    }

    console.log(users)

    return (
      <Context.Provider value={{ users, getUsers }}>
        { children }
      </Context.Provider>
    )
}

export default Context