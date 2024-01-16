import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import '../styles/profile.css'; 

const Profile = () => {

  let {user, logoutUser, userInfo, getUinfo, authTokens} = useContext(AuthContext);
    
 

  let updateUser = async (e) => {
    e.preventDefault();

    console.log( document.getElementById('weigth').value)
    
    let response = await fetch('http://127.0.0.1:8000/api/user/' + user.id + '/', {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify({
          'email':user.email,'password':user.password, 'username': user.username, 
          'first_name': document.getElementById('first_name').value ,'last_name': document.getElementById('last_name').value, 
          'sex': document.getElementById('sex').value,'age': document.getElementById('age').value, 
          'heigth': document.getElementById('heigth').value, 'weigth': document.getElementById('weigth').value
        })
    })

    if(response.status === 200){
      console.log('updated')
    }else{
      console.log(response)
    }
  }


  useEffect(()=>{

    getUinfo(user.id)

  }, [])




  return (
    <div className='basic-container'>
        <div className="profile-container">
          
          <form className='menu-Edit' onSubmit={updateUser}>
              <h2>Welcome {userInfo.username}</h2>

                  <span>FIRST AND LAST NAME</span>
                  <div className='small-container'>
                    <input type="text" id="first_name" name="first_name" placeholder={userInfo.first_name} required tabIndex={0}/>
                    
                    <input type="text" id="last_name" name="last_name" placeholder={userInfo.last_name} required tabIndex={0}/>
                  </div>

                  <span>SEX AND AGE</span>
                  <div className='small-container'>
                    
                    <select id="sex" name="sex" placeholder={userInfo.sex} required >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    <input type="number" id="age" name="age" placeholder={userInfo.age} min="16" max="80" required tabIndex={0}></input>
                  </div>

                  <span>HEIGTH AND WEIGTH</span>
                  <div className='small-container'>
                    <input type="number" id="heigth" name="heigth" placeholder={userInfo.height +' cm'} min="150" max="300" required tabIndex={0}/>
                    <input type="number" id="weigth" name="weigth" placeholder={userInfo.weight + ' kg'} min="30" max="300" required tabIndex={0}/>
                  </div>
                

                  <div className='small-container'>
                    <button type="submit">
                      <span>SAVE CHANGES</span> 
                    </button>

                    <button onClick={logoutUser} >LOGOUT</button>
                  </div>
        
          </form>
        </div>
    </div>
  )
}

export default Profile

