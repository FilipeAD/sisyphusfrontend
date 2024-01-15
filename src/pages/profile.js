import React, { useContext,  useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import '../styles/profile.css'; 

const Profile = () => {

  let {user, logoutUser, updateINFO, userInfo} = useContext(AuthContext);
  const [inputState, setInputState] = useState(false);
  

  const readOnly = () =>{
    const readonlyInputs = document.querySelectorAll('.readonly-input');
   
    if(inputState){
      for (let i = 0; i < readonlyInputs.length; i++) {
        readonlyInputs[i].readOnly = true;
      }
      
    }
    else{
      for (let i = 0; i < readonlyInputs.length; i++) {
        readonlyInputs[i].readOnly = false;
      }
    }
    setInputState(!inputState)
   
  }

  



  return (
    <div className='basic-container'>
        <div className="profile-container">
          
          <form className='menu-Edit'>
            <h2>Welcome {user.username}</h2>

            {userInfo.first_name}

            <span>FIRST AND LAST NAME</span>
            <div className='small-container'>
              <input type="text" id="first_name" name="first_name" className='readonly-input' placeholder={user.first_name} required tabIndex={0}/>
              
              <input type="text" id="last_name" name="last_name" className='readonly-input' placeholder={user.last_name} required tabIndex={0}/>
            </div>

            <span>SEX AND AGE</span>
            <div className='small-container'>
              <input type="text" id="sex" name="sex" className='readonly-input' placeholder={user.sex}  required tabIndex={0}/>
              <input type="text" id="age" name="age" className='readonly-input' placeholder={user.age}  required tabIndex={0}/>
            </div>

            <span>HEIGTH AND WEIGTH</span>
            <div className='small-container'>
              <input type="text" id="heigth" name="heigth" className='readonly-input' placeholder={user.last_name}  required tabIndex={0}/>
              <input type="text" id="weigth" name="weigth" className='readonly-input' placeholder={user.last_name}  required tabIndex={0}/>
            </div>
           

            <div className='small-container'>
              <button type="submit" onClick={() => (inputState ? updateINFO(user.id) : readOnly())}>
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

