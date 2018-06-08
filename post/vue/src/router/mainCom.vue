<template>
    <div>
        <a href="#" @click="linkRo">이것은 폼템플릿 연결</a>
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
                console.log('click')
                this.$router.push({name:'formTemplate'})
                e.preventDefault();
                
            }
        } 
    }
</script>   