import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import { routes } from './components/routes';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Navigation /> {/* Include the Navigation component */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        {/* Redirect from "/old-path" to "/new-path" */}
        <Route path="/old-path" element={<Navigate to="/new-path" />} />
      </Routes>
    </Router>
  );
}

export default App;