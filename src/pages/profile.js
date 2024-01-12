import React, { useContext,  useState  } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import '../styles/profile.css'; 

const Profile = () => {

  let {user, logoutUser} = useContext(AuthContext)
  const [inputState, setInputState] = useState(false);

  let readOnly = () =>{

    let readonlyInputs = document.querySelectorAll('.readonly-input');
    

    if (inputState == false){

      for (let i = 0; i < readonlyInputs.length; i++) {
        readonlyInputs[i].readOnly = true;
      }
      setInputState(true);
      

    }else{

      for (let i = 0; i < readonlyInputs.length; i++) {
        readonlyInputs[i].readOnly = false;
      }
      setInputState(false);

    }
  }


  return (
    <div className='basic-container'>
        <div className="profile-container">
          <h2>Profile</h2>
          
          <form className='menu-Edit' onLoad={readOnly}>

            <div className='small-container'>
              <input type="text" id="first_name" name="first_name" className='readonly-input' placeholder='FIRST NAME' required tabIndex={0}/>
              <input type="text" id="last_name" name="last_name" className='readonly-input' placeholder='LAST NAME' required tabIndex={0}/>
            </div>

            <div className='small-container'>
              <input type="text" id="first_name" name="first_name" className='readonly-input' placeholder='FIRST NAME' required tabIndex={0}/>
              <input type="text" id="last_name" name="last_name" className='readonly-input' placeholder='LAST NAME' required tabIndex={0}/>
            </div>
            
            <div className='small-container'>
              <input type="password" id="password" name="password" placeholder='PASSWORD' required tabIndex={0}/>
            </div>

          </form>
          
          <div>
            <button type="submit" onClick={readOnly} >EDIT INFO</button>

            <button onClick={logoutUser} type="submit">Logout</button>
          </div>

        </div>
    </div>
  )
}

export default Profile

