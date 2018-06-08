<template>
    <div>
        <p><label for="id">id:</label><input type="text" id="id" v-model="idValue"></p>
        <p><label for="password">password:</label><input type="passwords" id="formTemplate" v-model="passwordValue"></p>
        <button @click="submitBtn">확인</button><button @click="cancelBtn">취소</button>
    </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      idValue: "",
      passwordValue: ""
    };
  },
  methods: {
    submitBtn() {
        axios.post('http://localhost:3000/form_receiver',{
          a:this.idValue,
          b:this.passwordValue
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log('err')
        })

    },
    cancelBtn() {
      this.$router.push({ name: "mainCom" });
    }
  }
};
</script>