<template>
    <div class="wrap">
        <main>
           <input type="text" v-model="user" placeholder="请输入账号">
           <input type="password" v-model="pwd" placeholder="请输入密码">
           <button type="button" @click="submitFn">登录</button>
        </main>
        <myfooter></myfooter>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:"",
            pwd:""
        }
    },
    computed:{

    },
    methods:{
        submitFn(){
            if(this.user == 1234 && this.pwd == "qwer"){
                window.localStorage.setItem("name","YES");
                this.$router.push({name:"add"});
            }
            else{
                alert("用户名或密码输入错误")
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>