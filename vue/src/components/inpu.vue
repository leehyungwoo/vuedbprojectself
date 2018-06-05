<template>
    <div>
         <p>
            <label>아디디</label>
            <input type="text" v-model="idval" >
        </p>
        <p>
            <label>비밀번호</label>
            <input type="text" v-model="passval">
        </p>
            <button @click="loginAc({idval:idval,passval:passval})">로그인</button>
            <button @click="goInfor()">회원가입</button>
 
    </div>
</template>

<script>
import { mapActions } from "vuex"
import _ from "lodash"
export default {
  name: "inpu",
  data(){
      return{
          idval:'',
          passval:''
      }
  },
  methods:_.extend({
      goInfor(){
          this.$router.push({path:'infor'})
      }
  },mapActions(['loginAc']))
 
};
</script>