const UserProfile = ({ currentUser }) => {
    const { first, last } = currentUser.name
    const { large } = currentUser.picture
    return (
        <>
          <img src={large} alt={`${first}-${last}`}/>
          <h1>Soy {first} {last}</h1>
        </>
    )
}

export default UserProfile