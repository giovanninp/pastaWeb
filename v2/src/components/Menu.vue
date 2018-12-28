<template>
  <div class="hello">
    <div class="holder">

      <!-- <form @submit.prevent="addPrato">
        <input type="text" placeholder="Procurar prato" v-model="prato"/>
         {{ prato }}
      </form> -->

      <ul>
       <li v-for="(data, index) in valor" :key='index'>{{ data.prato }}</li>
      </ul>

      <p>Esses são os pratos registrados no momento.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
    return{
      prato: '',
      valor: [
        { "prato": "Ravioli" },
        { "prato": "Conchiglioni"},
        { "prato": "Lasagna"},
        { "prato": "Outros..."}

      ],
    }
  },
  methods: {
    addPrato() {
      this.prato.push({prato: this.valor});
      this.prato = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .holder {
    z-index: 2;
    background: none;
  }

  ul {
    margin: 0;
    list-style-type: none;
    transition: 0.5s;
  }

  ul li {
    padding: 2%;
    font-size: 140%;
    border: 2px solid black;
    margin-bottom: 2px;
    color: white;
    overflow-x: hidden;
    border-radius: 5px;
    transition: 0.5s;
  }

  ul li:hover{
    border: 2px solid white;
  }

  p {
    text-align:left;
    padding: 30px 0;
    color: white;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: white;
    color: white;
  }

@media screen and (max-width:400px ) {
  ul li{
    padding: 5%;
  }
}

</style>
