<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
import mainCom from './router/mainCom'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{mainCom:mainCom}
}
</script>
