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
import Navbar from './components/navbar'

function App() {
  return (
    <div className='App'>
    <Router>
        <AuthProvider>
          <Navbar/>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/workoutPlanner" element={<WorkoutPlanner />} />
            <Route path="/diet" element={<Diet />} />

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