import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import UserProfile from './components/UserProfile/UserProfile'
import UsersList from './components/UsersList/UsersList'
import { UserContext } from './context/context'

function App() {

  const [currentUser, setCurrentUser] = useState({})
  
  return (
    <UserContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <UsersList 
              setCurrentUser={setCurrentUser}  
            /> } />
          <Route path="/profile/:userID" element={<UserProfile currentUser={currentUser} /> } />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
