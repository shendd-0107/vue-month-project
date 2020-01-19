<template>
    <div class="wrap">
        <myheader></myheader>
        <main >
           <router-view ></router-view>
           <ul class="right">
            <li >
                <p class="iconfont icon-wode"></p>
                <dd>自己</dd>
            </li>
            <li >
                <p class="iconfont icon-shoucang"></p>
                <dd>1</dd>
            </li>
            <li @click="setdialog"> 
                <p class="iconfont icon-xiaoxi"></p>
                <dd>222</dd>
            </li>
            <li >
                <p class="iconfont icon-fenxiang"></p>
                <dd>QQ</dd>
            </li>
            </ul>
           <div class="dialogs" v-show=getdiolog>
               <h3 @click=falseFn>></h3>
               <ul>
                    <li v-for="(item,index) in getmsgData" 
                    :key="index">{{item.title}}
                        <span :class='["iconfont icon-shoucang",{active:item.flag}]' @click=flagFn(index)></span>{{item.num}}
                    </li>
                    <li class="ipt"><input v-model=val type="text"><button @click=setdata(val)>发表</button></li>
               </ul>
           </div>
        </main>
        <myfooter></myfooter>
    </div>
</template>
<script>
import {mapMutations,mapGetters} from "vuex"
export default {
    props:{

    },
    components:{
        
    },
    computed:{
        ...mapGetters(['getdiolog','getmsgData'])
    },
    data(){
        return {
            val:""
        }
    },
    methods:{
        ...mapMutations(['setdialog','falseFn','setdata','flagFn']),
        
    },
    created(){
    
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
    position: relative;
    .right{
        position: absolute;
        right:5%;
        bottom:10%;
        z-index: 99;
        >li{
            // color:#fff;
            text-align: center;
            margin-top:20px;
            >p{
                font-size: 30px;
                
            }
            
        }
    }
    .dialogs{
        width: 100%;
        height: 70%;
        background: rgba(0,0,0,.8);
        position: fixed;
        bottom:50px;
        left:0;
        border-radius: 30px 30px 0 0;
        z-index:100;
        display: flex;
        flex-direction: column;
        // position: relative;
        >h3{
            width: 100%;
            height: 50px;
            color:#fff;
            margin-right:20px;
        }
        >ul{
            flex:1;
            flex-direction: column;
            color:#ccc;
            >li{
                width: 100%;
                height: 40px;
                line-height: 40px;
            }
            .ipt{
                position: absolute;
                bottom:0;
                left:0
            }
        }
    }
    .banner{
        width: 100%;
        height: 100%;
        // img{
        //     width: 100%;
        //     height: 100%;
        // }
    }
    .active{
        color:tomato;
    }
}
</style>