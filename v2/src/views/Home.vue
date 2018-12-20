<template>
  <div class="main">
    <div class="welcomer">
      <h1>Bem vindo!</h1>
    </div>
    <img src="../assets/shad.png" alt="" class="bgshad">
    <img src="../assets/work.jpg" alt="" class="work">
  </div>
</template>

<style>

.main{
  position: relative;
  top: 0;
  left: 0;
}

.welcomer{
  position: absolute;
  z-index: 1;
  padding: 5% 0% 0% 5%;
}

.welcomer h1{
  font-family:Arial, Helvetica, sans-serif;
  color: black;
  font-size: 400%;
  margin: 0;
  padding-left: 0%;

}

.bgshad {
  width: 100%;
  overflow-x: 0;
  overflow-y: 0;
  z-index: 1;
  position: absolute;
}

.work {
  width: 100%;
  padding-top: 0;
  z-index: 0;
  position: relative;
}

@media screen and (max-width: 400px) {
  .welcomer h1{
    color: black;
    font-size: 200%;
  }

}

</style>
