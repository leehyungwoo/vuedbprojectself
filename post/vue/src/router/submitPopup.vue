<template>
    <div>
        <p>성공했습니다</p>
        <a href="#" @click="linkRo">메인으로가기</a>
    </div>
</template>

<script>
import formTemplate from './formTemplate'
    export default {
        date(){
            return{
                
            }
        },
        methods:{
            linkRo(e){
                this.$router.push({name:'mainCom'})
                e.preventDefault(); 
            }
        } 
    }
</script>   