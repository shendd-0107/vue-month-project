<template>
    
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../static/绿水青山.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../static/绿水青山.jpg" alt="">
                </div>
                
            </div>
            
        </div>
    
</template>
<script>
import Swiper from "swiper"

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

    },
    methods:{

    },
    created(){
        this.$nextTick(()=>{
            new Swiper(".banner",{
                // autoplay:true,
                // loop:true,
                direction:'vertical'
            })
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>