<template>
    <div>
        <form method="get">
       <p>
           <label>id</label>
           <input type="text" v-model="idval">
       </p>
       <p>
           <label>password</label>
           <input type="password" v-model="passval">
       </p>
       <button @click="sumit">전송</button>
       <button @click="goBack">뒤로가기</button>
       </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "infor",
  data() {
    return {
      idval: "",
      passval: ""
    };
  },
  methods: {
    sumit() {
      var idval = this.idval;
      var passval = this.passval;
      axios.get("http://localhost:3000/userInfo", {
        params: { idval: idval, passval: passval },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>