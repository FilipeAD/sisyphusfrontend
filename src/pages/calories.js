import React, { useContext, useEffect } from 'react'
import '../styles/calories.css'; 
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Calories = () => {
    let {cmCalories} = useContext(AuthContext);
    const roundedNumber = Math.round(cmCalories)
    const history = useNavigate();

    const checkcalories = () => {
        if (cmCalories == 0) {
          history('/diet');
        } 
    }

    useEffect(()=>{
        checkcalories()
    })

    return (
        <div className='basic-container'>
            <div className='option-container'>

                <div className='calorie-container'>
                    <h1>Lose weigth</h1>
                    <h3>Calorie intake per day</h3>
                    <p>{roundedNumber-500} - {roundedNumber-300}</p>
                </div>

                <div className='calorie-container'>
                    <h1>Maintain weight</h1>
                    <h3>Calorie intake per day</h3>
                    <p>{roundedNumber - 100} - {roundedNumber}</p>
                </div>
        
                <div className='calorie-container'>
                    <h1>Caloric Surplus</h1>
                    <h3>Calorie intake per day</h3>
                    <p>{roundedNumber + 200} - {roundedNumber + 350}</p>
                </div>
            
            </div>
        </div>
    )
}

export default Calories