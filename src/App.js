import React,{useState} from 'react';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Registrar from './components/usuario/Registrar';
import Login from './components/usuario/Login';
import TusReservas from './components/reserva/TusReservas';
import Reservas from './components/reserva/Reservas';
import ListadoUsuarios from './components/usuario/ListadoUsuarios';

import ListadoPeliculas from  './components/pelicula/ListadoPeliculas';
import AddPelicula from  './components/pelicula/AddPelicula';
import EditPelicula from  './components/pelicula/EditPelicula';

function App() {
  const [userSesion, setUserSesion]= useState({
    id:0,
    nombre:'',
    tipoUsuario:0
  });
  return (
    <Router>
      <Switch>
        <Layout userSesion={userSesion} setUserSesion={setUserSesion}>
          {parseInt(localStorage.getItem('id'))===0 && <Redirect to="login"/>}
          <Route exact path="/">
              <Home userSesion={userSesion}/>
          </Route>
          <Route exact path="/misreservas">
              <TusReservas userSesion={userSesion}/>
          </Route>
          <Route exact path="/peliculas">
              <ListadoPeliculas userSesion={userSesion}/>
          </Route>

          <Route exact path="/peliculas/add">
              <AddPelicula userSesion={userSesion}/>
          </Route>

          <Route exact path="/peliculas/edit/:id" component={EditPelicula} />
          <Route exact path="/reservas">
              <Reservas userSesion={userSesion}/>
          </Route>

          
          <Route exact path="/usuarios">
              <ListadoUsuarios userSesion={userSesion}/>
          </Route>
          
          <Route exact path="/login">
              <Login setUserSesion={setUserSesion} />
          </Route>
          <Route exact path="/registrar">
              <Registrar />
          </Route>
        </Layout>
      </Switch>
    </Router>
    
  );
}

export default App;
