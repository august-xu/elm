<template>
    <div>
        <h1>{{username}}</h1>
        <p>welcome {{username}}</p>
        <router-link :to="'/home/order/'+userid ">我的订单</router-link>
        <router-view></router-view>

        <back></back>


    </div>
</template>

<script>

    import Back from '../components/Back.vue'

    export default {
        data(){
            return {
                username:"",
                userid:""
            }
        },
        created(){
          this.username=this.$route.query.username;
          this.userid=this.$route.query.userid;
        },

        components:{Back}
    }

</script>

<style>


</style>