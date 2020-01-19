<template>
  
    <dl>
        <dt>
            <img src="" alt="">
        </dt>
        <dd>
            <p>{{title}}</p>
            <p>{{price}}</p>
            <p><span>+</span></p>
        </dd>
    </dl>
    
</template>
<script>
export default {
    props:['title','price'],
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

    },
    mounted(){

    }
}
</script>
<style lang="scss">
    dl{
        width: 100%;
        height: 120px;
        border-bottom:1px solid #ccc;
        display: flex;
        >dt{
            width: 100px;
            height: 100%;
            background: #fcc;
        }
        >dd{
            flex:1;
            display: flex;
            flex-direction: column;
            >p{
                flex:1;
            }
        }
    }
</style>