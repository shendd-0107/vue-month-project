<template>
    <div class="wrap">
        <myheader><span>{{title}}</span></myheader>
        <div class="sort">
            <span @click=zongFn>综合</span>
            <span @click=salesFn>销量 ﹀</span>
            <span @click=priceFn>价格 ﹀</span>
            <span >最新</span>
        </div>
        <main>
            <mylist v-for="(item,index) in list " :key="index" 
            :Image=item.Image
            :Introduction=item.Introduction
            :LinePrice=item.LinePrice
            :Name=item.Name
            :NowPromo=item.NowPromo
            :Sales=item.Sales
            ></mylist>
        </main>
        <myfooter></myfooter>
    </div>
</template>
<script>
import mylist from "../components/list"
export default {
    components:{
        mylist
    },
    data(){
        return {
            list:[],
            title:null
        }
    },
    methods:{
        salesFn(){
            this.list.sort((a,b)=>{
                let aa = a.Sales.includes("万")?a.Sales.slice(0,a.Sales.length-1)*10000:a.Sales;
                let bb = b.Sales.includes("万")?b.Sales.slice(0,b.Sales.length-1)*10000:b.Sales;
                return bb-aa;
            })
        },
        priceFn(){
            this.list.sort((a,b)=>{
                return a.LinePrice-b.LinePrice;
            })
        },
        zongFn(){
            // this.list = this.list;
        }
    },
    created(){
        this.$http.get("/api/list").then(res=>{
            this.list = res.data.Datas.FlowerList;
            this.title = res.data.Datas.FlowerListBanners.Title;
        })
    }
}
</script>
<style lang="scss">
    .sort{
        width: 100%;
        height: 45px;
        display: flex;
        border-bottom:1px solid #ccc;
        >span{
            flex:1;
            line-height: 45px;
            text-align: center;
        }
    }
</style>