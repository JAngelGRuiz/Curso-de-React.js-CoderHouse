import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProfile from './components/UserProfile/UserProfile'
import UsersList from './components/UsersList/UsersList'

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => setUsers(data.results))
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList users={users} setCurrentUser={setCurrentUser}  /> } />
        <Route path="/profile/:userID" element={<UserProfile currentUser={currentUser} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
