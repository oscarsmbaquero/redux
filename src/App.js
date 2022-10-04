import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from "./Config/routes";

//import Productos from './components/Productos';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <div className='container mt-5'>
        <Routes>
        {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
