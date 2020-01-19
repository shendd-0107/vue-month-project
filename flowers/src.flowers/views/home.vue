<template>
    <div class="wrap">
        <myheader><span>首页</span></myheader>
        <div class="nav">
                <ul :style="{'width':width+'px'}" ref="ulli">
                    <myli v-for="(item,index) in banner" 
                    :key="index" 
                    :Linkage=item.Linkage 
                    :index=index 
                    :ind=ind
                    @clickFn=clickFn
                    ></myli>
                </ul>
            </div>
        <main>
            <div class="banner swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item1,index1) in banner" 
                    :key="index1"
                    @click=everyFn
                    >
                        <img :src="item1.ImageUrl" alt="">
                    </div>
                </div>
            </div>
        </main>
        <myfooter></myfooter>
    </div>
</template>
<script>

import myli from "../components/nav"
import BScroll from "better-scroll"
import Swiper from "swiper"
export default {
    props:{

    },
    components:{
        myli
    },
    data(){
        return {
            banner:null,
            width:0,
            ind:0,
            title:null
        }
    },
    methods:{
        clickFn(index){
            // this.ind = index;
        },
        everyFn(type){
            this.$router.push({path:"/classify"})
        }
    },
    created(){
        const that = this;
        this.$http.get("/api/banner").then(res=>{
            this.banner = res.data.BannerList;
            this.$nextTick(()=>{
                const bs = new BScroll(".nav",{
                    scrollX:true,
                    click:true
                })
                new Swiper(".banner",{
                    spaceBetween:20,
                    on:{
                        slideChangeTransitionEnd(){
                            that.ind=this.activeIndex;
                            bs.scrollToElement(that.$refs.ulli.children[that.ind],1000)
                        }
                    }
                })
                Array.from(this.$refs.ulli.children,(item)=>{
                    this.width += item.offsetWidth;
                })
            })
        })
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
    background: #fcc;
    display: flex;
    
    >span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
}
.nav{
    width: 100%;
    height: 45px;
    overflow: hidden;
    >ul{
        display: flex;
        >li{
            flex-shrink: 0;
            padding:0 20px;
            line-height: 45px;
            text-align: center;
        }
        .active{
            color:#f9c;
            border-bottom:1px solid #f9c;
        }
    }
}
main{
    flex:1;
    overflow: auto;
    .swiper-slide{
        padding:20px;
        >img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
        }
    }
}
</style>