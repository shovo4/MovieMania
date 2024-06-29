import './App.css';
import Menu from './Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './route-config';
import configureValidation from './Validation';

configureValidation();

function App() {
  return (
    <Router>
      <Menu />
      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
