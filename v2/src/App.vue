<template>
  <div id="app">
    <div class="sidenav">
      <img src="./assets/w.png" class="logo">
      <div id="nav">
        <router-link to="/">
          <img src="./assets/home.png" alt="home" class="icon"> Home
        </router-link>
        <router-link to="/menu">
         <img src="./assets/dish (1).png" alt="tray" class="icon"> Cardápio
        </router-link>
        <router-link to="/orders">
          <img src="./assets/tray.png" alt="dish" class="icon"> Encomendas
        </router-link>
        <router-link to="/about">Sobre</router-link>
      </div>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

html{
  background-color: black;
}

#app {
  font-family: 'Roboto','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidenav {
  height: 100%;
  width: 15%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  padding-top: 2%;
  background-color: black;
  transition: 0.5s;
  display: block;
  overflow-x: hidden;
}

.logo {
  width: 80%;
  transition: 0.5s;
}

#nav a{
  margin: 10px 10px 10px 10px;
  padding: 10% 0% 10% 0%;
  font-size: 100%;
  text-decoration: none;
  font-weight: bold;
  color: white;
  display: block;
  transition: 0.5s;
}
a .icon {
  display: block;
  padding: 0% 0% 0% 10%;
  width: 0%;
  transition: 0.5s;
}


.sidenav a:hover{
  color: black;
  border-width: 2px;
  border-radius: 2px;
}

.sidenav .logo:hover{
  width: 100%;

}

#nav a.router-link-exact-active {
  color: white;
  border-style: solid;
  border-width: 2px;
  border-radius: 2px 2px 2px 2px;
  transition: 0.5s;
}

.view{
  padding-left: 14%;
  transition: 0.5s;
  width: 100%;
}

@media screen and (max-width: 400px) {
  .logo{
    width: 100%;
  }
  #nav a{
    font-size: 0;
    padding: 10% 10% 10% 10%;
    margin: 2px;
  }
  a .icon{
    width: 100%;
    padding: 2% 2% 2% 2%;
  }
  #nav a.router-link-exact-active {
  /* border-style: none; */
  background-radius: 2px;

  }
  .view{
    padding-left: 13%;
  }
  }
</style>
