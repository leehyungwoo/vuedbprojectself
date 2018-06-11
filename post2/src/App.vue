<template>
  <div id="app">
    <input type="text" v-model="m_id">
    <input type="text" v-model="m_ps">  
    <button @click="sub({userinfo:{m_id:m_id,m_ps:m_ps}})">전송</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "app",
  data(){
    return {
        m_id:"",
        m_ps:"" 
    }
  },
  methods:mapActions(['sub'])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
