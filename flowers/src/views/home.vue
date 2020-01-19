<template>
    <div class="wrap">
        <myheader></myheader>
        <main >
            <div class="left">
                
                <div v-if="!getterleft">loading</div>
                <li v-else v-for="(item,index) in getterleft" 
                :key="index" 
                :class="{active:ind==index}"
                @click='aaa(index)'>{{item.title}}</li>
            </div>
            <div class="right">
                <ul >
                    <h3>{{titles}}</h3>
                    <div v-if="!getterarr">loading</div>
                    <mylist v-else v-for="(item1,index1) in getterarr" :key=index1 
                    :title=item1.title
                    :price=item1.price
                    ></mylist>
                </ul>
            </div>
        </main>
        <myfooter></myfooter>
    </div>
</template>
<script>
import {mapMutations,mapGetters,mapActions,mapState} from "vuex"
import mylist from "../components/list"
export default {
    props:{

    },
    components:{
        mylist
    },
    computed:{
        ...mapGetters(['getterleft','getterright','getterarr']),
        ...mapState(['ind','titles'])
    },
    data(){
        return {
            
        }
    },
    methods:{
        // ...mapMutations(['clickFn']),
        ...mapActions(['getleft','getright']),
        aaa(index){
            console.log(index,"--------");
        }
    },
    created(){
        this.getleft()
        this.getright()
        
    }
}
</script>
<style  lang="scss">

.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
}
header,footer{
    width: 100%;
    height: 50px;
    // background: #fcc;
    display: flex;
    >span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
main{
    flex:1;
    overflow: auto;
    display: flex;

    .left{
        width: 120px;
        height: 100%;
        border-right:1px solid #ccc;
        >li{
            width: 100%;
            height: 60px;
            text-align: center;
            line-height: 60px;
            border-bottom:1px solid #ccc;
        }
    }
    .right{
        flex:1;
    }
    .active{
        color:tomato;
    }
}
</style>