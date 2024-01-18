import React, { useContext } from 'react'
import '../styles/calories.css'; 
import AuthContext from '../context/AuthContext';

const calories = (props) => {
    const {cmCalories} = useContext(AuthContext);

    return (
        <div className='basic-container'>
            <div className='option-container'>
                <div>
                <h1>Calories Page</h1>
                    <p>Calories: {cmCalories}</p>
                </div>

                <div>

                </div>

                <div>

                </div>
            
            </div>
        </div>
    )
}

export default calories
