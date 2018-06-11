import axios from "axios";

export default {
    sub(store,payload){
        store.state = payload
       axios.post("http://localhost:3000/api/usi", {userinfo:store.state.userinfo})
      .then((res)=>{
            console.log(res)
      }).catch((err)=>{

      })
     }
}