import React, { useContext, useState } from 'react';
import '../styles/basicForms.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Diet = () => {
  let { cmCalories, setCalorie} = useContext(AuthContext);
  const history = useNavigate();
  
  const handleButtonClick = () => {
      if (cmCalories > 0) {
        history('/calories');
      } else {
        console.log("calories not calculated");
      }
  }



  let getCalories = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/calories/${document.getElementById('weigth').value}&${document.getElementById('heigth').value}&${document.getElementById('sex').value}&${document.getElementById('activity').value}&${document.getElementById('age').value}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })


    let data = await response.json()
    console.log('working')
    if(response.status == 200){
        setCalorie(data);
    }else{
        console.error(`Failed to get calories information. Status: ${response.status}`);
    }
}


  


  return (
    <div className='basic-container'>
      <div className="profile-container">
        <h1>Daily Calorie Calculator</h1>
        <p>Feel free to enter your information below in the Daily Calorie Intake calculator to receive your personal current daily calorie intake, and what your body needs to fuel itself during the day with your routine!</p>
        
            <form className='menu-Edit' onSubmit={getCalories}>
  
                <span>HEIGTH AND WEIGTH</span>
                <div className='small-container'>
                  <input type="number" id="heigth" name="heigth"  min="150" max="300" equired tabIndex={0}/>
                  
                  <input type="number" id="weigth" name="weigth"  min="30" max="200" required tabIndex={0}/>
                </div>

                <span>SEX AND AGE</span>
                <div className='small-container'>
                  
                  <select id="sex" name="sex"required >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  <input type="number" id="age" name="age"  min="16" max="80" required tabIndex={0}></input>
                </div>

                <div className='single-row'>
                  <span>ACTIVITY LEVEL</span>
                  <select id="activity" name="activity" required >
                    <option value={'Sedentary'}> Sedentary </option>
                    <option value={'Lightly_active'}>Lightly active</option>
                    <option value={'Moderately_active'}>Moderately active</option>
                    <option value={'Very_active'}>Very active</option>
                  </select>
                </div>
            

                <div className='small-container'>
                  <button type="submit" onClick={handleButtonClick} >
                    Calculate your caloric intake
                  </button>
                </div>
      
        </form>
      
      </div>
    </div>
  
  );
};

export default Diet;