import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransitionWrapper from './components/transitionWrapper';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import WorkoutPlanner from './pages/workoutPlanner';
import Diet from './pages/diet';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <TransitionWrapper>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workoutPlanner" element={<WorkoutPlanner />} />
            <Route path="/diet" element={<Diet />} />
          </Routes>
        </TransitionWrapper>
      </Router>
    </div>
    
  );
}

export default App;