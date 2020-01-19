<template>
    <div class="wrap">
        <myheader><span>我的</span></myheader>
        <main>
            我的
            <div v-for="(item,index) in getbuylist" :key="index">
                {{item}}------------>
                <!-- <dl v-for="(item1,index1) in item.item1" :key="index1" >
                    <dt >
                        <img :src="item1.Icon" alt="">
                    </dt>
                    <dd>
                        <span>{{item1.Label}}</span>
                    </dd>
                </dl> -->
            </div>
            
        </main>
        <myfooter></myfooter>

    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getbuylist'])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>