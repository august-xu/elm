<template>
    <div class="loginContainer">
        <h3 v-if="error">{{error}}</h3>
        <div>
            <span>用户名</span>
            <input type="text" v-model="username">
        </div>
        <div>
            <span>密码</span>
            <input type="password" v-model="password">
        </div>
        <div>
            <input type="button" value="登陆" @click="login">
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                username: "",
                password: "",
                error:""
            }
        },

        methods:{
            login(){

                if (this.username && this.password){
                    console.log("111")

                    this.$router.push({path:"/home",query:{username: this.username,userid:1}})
                }else {
                    this.error="请输入用户名或密码"
                }

            }
        },
        created(){

            this.username = "zhangsan";
            this.password = '123456';

        },
    }

</script>

<style>

    .loginContainer {
        padding-top: 1.95rem;
    }

    .loginContainer p, span, input {
        font-family: Helvetica Neue, Tahoma, Arial;
    }


</style>