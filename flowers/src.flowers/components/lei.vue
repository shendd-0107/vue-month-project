<template>
    <div class="lei">
        <h3>{{Subject}}</h3>
        <div :class=every>
            <dl v-for="(item1,index1) in item.Content" :key="index1" 
            :class="{active:index1==ind}" 
            @click=clickFn(index1,Subject,item1)>
                <dt v-if="item1.Icon">
                    <img :src="item1.Icon" alt="">
                </dt>
                <dd>
                    <span>{{item1.Label}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    props:['Subject',"item"],
    data(){
        return {
            every:this.item.Layout,
            ind:null
        }
    },
    methods:{
        ...mapMutations(['setlist']),
        clickFn(ind,Subject,item1){
            this.ind = ind;
            this.setlist({ind,Subject,item1});
        }
    }
}
</script>
<style  lang="scss">
.lei{
    width: 100%;
    height: 100%;
}
.default{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    >dl{
        width: 25%;
        height: 150px;
        display: flex;
        flex-direction: column;
        >dt{
            width: 100%;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        >dd{
            flex:1;display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .active{
        border:1px solid #f3c;
    }
}
.border{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    >dl{
        width: 25%;
        height: 40px;
        display: flex;
        border:1px solid #ccc;
        // margin:5px;
        >dt{
            width: 50%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        >dd{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .active{
        border:1px solid #f3c;
    }
}

</style>