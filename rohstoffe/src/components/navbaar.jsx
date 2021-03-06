import React, { Component } from 'react';


class Navbaar extends Component {
  render() {
    return (
      
      <nav class ="navbar fixed-top col-12 navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/home">Rohstoffe</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/perfilco">Perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/historial">Historial</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='/estadocomprador'>Estado del pedido</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>

    );
  }
}

export default Navbaar;