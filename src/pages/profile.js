import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const profile = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div>
        {user && <p>Hi {user.username}</p>}

        <button onClick={logoutUser} type="submit">Logout</button>

      
    </div>
  )
}

export default profile

