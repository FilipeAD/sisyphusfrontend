import React, { useContext, useEffect} from 'react'
import '../styles/calories.css'; 
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Calories = () => {
    const history = useNavigate();
    let {cmCalories, user} = useContext(AuthContext);
    const roundedNumber = Math.round(cmCalories)
    const deficit = roundedNumber-300
    const surplus = roundedNumber+200

    const checkcalories = () => {
        if (cmCalories == 0) {
          history('/diet');
        } 
    }

    let updateCalories = async (userId, newCalories) => {
        const url = `http://127.0.0.1:8000/api/update-calories/${userId}/`;
    
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ calories: newCalories }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Calories updated:', data);
            } else {
                console.error('Failed to update calories:', response.status);
            }
        } catch (error) {
            console.error('Error updating calories:', error);
        }
    };

    const conectThePlan = (e) =>{
        if(user){
            let newCalories;
            switch (e.target.id) {
                case 'surplus':
                    newCalories = surplus
                    break;
                case 'maintain':
                    newCalories = roundedNumber
                    break;
                case 'deficit':
                    newCalories = deficit
                    break;
               
            }
            updateCalories(user.id, newCalories)
            history('/profilepage')
        }else{
            alert("You are not logged in.'Create Account' to connect plan.")
            history('/register');
        }
    }

    useEffect(()=>{
        checkcalories()
    })

    return (
        <div className='calorie-container'>
            <h1>connect plan to your profile</h1>
            <div className='option-container'>

                <div className='calorie-container'>
                    <h1>Lose weigth</h1>
                    <h3>Calorie intake per day</h3>
                    <p>{deficit-200} - {deficit}</p>
                    <button id="deficit" onClick={conectThePlan}>connect plan</button>
                </div>

                <div className='calorie-container'>
                    <h1>Maintain weight</h1>
                    <h3>Calorie intake per day</h3>
                    <p>{roundedNumber - 100} - {roundedNumber}</p>
                    <button id="maintain" onClick={conectThePlan}>connect plan</button>
                </div>
        
                <div className='calorie-container'>
                    <h1>Caloric Surplus</h1>
                    <h3>Calorie intake per day</h3>
                    <p>{surplus} - {surplus + 150}</p>
                    <button  id="surplus"  onClick={conectThePlan}>connect plan</button>
                </div>
            
            </div>
        </div>
    )
}

export default Calories