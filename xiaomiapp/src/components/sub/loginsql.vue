<template>
    <form>
        <label for="username">用户名:</label>
        <input type="text" v-model="username" id="username">
        <br>
        <label for="pwd">密码:</label>
        <input type="text" v-model="pwd" id="pwd">
        <br>
        <button @click.prevent="login">登录</button>
        <button @click.prevent="register">注册</button>
        <div>{{msg}}</div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            pwd:'',
            msg:''//接收数据
        }
    },
    methods:{
        login(){
          // 提交数据
            this.$axios.post('http://localhost:4000'+'/api/login',{username:this.username,password:this.pwd})
            .then(result=>{
                console.log('RESULT:',result)
                this.msg = result.data.msg
            })
            .catch(err=>{
                console.log(err)
            })
        },
        register(){
            this.$axios.post('http://localhost:4000'+'/api/register',{username:this.username,password:this.pwd})
            .then(result=>{
                console.log(result.data)
                this.msg = result.data.msg
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
