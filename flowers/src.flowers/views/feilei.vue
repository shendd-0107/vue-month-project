<template>
    <div class="wrap">
        <myheader>
            <span>分类</span>
        </myheader>
        <main>
             <mylei v-for="(item,index) in catagory" :key="index" :item=item :Subject=item.Subject></mylei>
        </main>
        <myfooter></myfooter>
    </div>
</template>
<script>
import mylei from "../components/lei"
export default {
    props:{

    },
    components:{
        mylei
    },
    data(){
        return {
            catagory:null
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.$http.get("/api/catagory").then(res=>{
            this.catagory = res.data;
            console.log(res.data);
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>