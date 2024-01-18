import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute' /* use for profile option */
import TransitionWrapper from './utils/transitionWrapper';
import {AuthProvider} from './context/AuthContext'
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import WorkoutPlanner from './pages/workoutPlanner';
import Diet from './pages/diet';
import Profile from './pages/profile'
import './styles/App.css';
import Header from './components/navbar';
import Exercises from './pages/exercises'
import Calories from './pages/calories'

function App() {
  return (
    <div className='App'>
      <Router>
          <AuthProvider>
            <Header/>

            <Routes>
              <Route index element={<Home />} />
              <Route path="/workoutPlanner" element={<WorkoutPlanner />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/exercises" element={ <Exercises /> }/>
              <Route path="/calories" element={ <Calories /> }/>

              <Route path="/login" element={ <Login /> }/>
              <Route path="/register" element={<Register />} /> 
              <Route path="/profilepage" element={<Profile />} />
            </Routes>


          </AuthProvider>
      </Router>
  </div>

  );
}

export default App;
