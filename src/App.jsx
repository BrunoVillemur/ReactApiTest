import React from "react";
import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Usuario } from "./components/Usuario";
import { Usuarios } from "./components/Usuarios";
function App() {

  return (
    <Router>
      <Link to="/">Usuarios</Link>

      <Routes>
        <Route path='/usuario/:id' element={<Usuario/>} ></Route>
        <Route exact path='/' element={<Usuarios/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
