<template>
  <div id="app">
    <navbar />
    <div class="container">
      <!-- {{doCleanDict()}} -->
    <router-link to="/profile">Go to profile</router-link>
      <table v-if="verbs.length>0" class="verb_table">
        <tr v-for="(row, index) in verbs" :key="index" @click="showModal(index)">
          <td><div class="verb">{{row['inf']}}</div></td>
          <td><div class="verb">{{row['p_simple']}}</div></td>
          <td><div class="verb">{{row['p_p']}}</div></td>
          <td><div class="verb">{{row['trans']}}</div></td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

import navbar from "./components/interface/navbar"

export default {
  name: 'App',
  components: {
    navbar
  },
  data(){
    return{
      verbs:[],
      cleanDict:[]
    }
  },
  mounted(){
    this.getAll()
  },
  methods:{
    getAll(){
      axios.post('http://localhost/english_verbs/getAll.php')
      .then((res)=>{
        console.log(res)
        this.$store.commit('getAll', res.data.verbs)
        this.verbs = this.$store.getters.getVerbs
        })
    },
    showModal(i){
      alert(i)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
