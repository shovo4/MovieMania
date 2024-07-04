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
      <footer className='bd-footer py-5 mt-5 bg-light'>
        <div className='container'>
          Movie Mania @{new Date().getFullYear().toString()}
        </div>
      </footer>
    </Router>
  );
}

export default App;
