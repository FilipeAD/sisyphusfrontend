import React, { useContext,  useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import '../styles/profile.css'; 

const Profile = () => {

  let {user, logoutUser, updateUser, getUinfo, userInfo} = useContext(AuthContext);
  const [inputState, setInputState] = useState(true);
  

  const readOnly = () =>{
    if(inputState){
      setInputState(!inputState)
    }
    else{
      setInputState(!inputState)
    }
  }

  useEffect(()=>{
    getUinfo(user.id)
}, [])




  return (
    <div className='basic-container'>
        <div className="profile-container">
          
          <form className='menu-Edit' onSubmit={() => (inputState ? updateUser(userInfo.id) : readOnly())}>
              <h2>Welcome {userInfo.username}</h2>

                  <span>FIRST AND LAST NAME</span>
                  <div className='small-container'>
                    <input type="text" id="first_name" name="first_name" className='readonly-input' placeholder={userInfo.first_name} required tabIndex={0}/>
                    
                    <input type="text" id="last_name" name="last_name" className='readonly-input' placeholder={userInfo.last_name} required tabIndex={0}/>
                  </div>

                  <span>SEX AND AGE</span>
                  <div className='small-container'>
                    <input type="text" id="sex" name="sex" className='readonly-input' placeholder={userInfo.sex}  required tabIndex={0}/>
                    <input type="text" id="age" name="age" className='readonly-input' placeholder={userInfo.age}  required tabIndex={0}/>
                  </div>

                  <span>HEIGTH AND WEIGTH</span>
                  <div className='small-container'>
                    <input type="text" id="heigth" name="heigth" className='readonly-input' placeholder={userInfo.height}  required tabIndex={0}/>
                    <input type="text" id="weigth" name="weigth" className='readonly-input' placeholder={userInfo.weight}  required tabIndex={0}/>
                  </div>
                

                  <div className='small-container'>
                    <button type="submit">
                      {inputState ? <span>SAVE CHANGES</span> : <span>EDIT INFO</span>}
                    </button>

                    <button onClick={logoutUser} type="submit">LOGOUT</button>
                  </div>
        
          </form>
        </div>
    </div>
  )
}

export default Profile

