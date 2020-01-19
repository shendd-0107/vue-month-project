<template>
    <div class="list">
        <dt>
            <img :src="Image" alt="">
        </dt>
        <dd>
            <p>{{Name}}</p>
            <p>{{Introduction}}</p>
            <p v-if="NowPromo">{{NowPromo[0]}}</p>
            <p>{{LinePrice}}</p>
            <p>{{Sales}}</p>
        </dd>
    </div>
</template>
<script>
export default {
    props:['Sales','NowPromo','Name','LinePrice','Introduction','Image'],
    
}
</script>
<style scoped lang="scss">
    .list{
        width: 100%;
        height: 200px;
        display: flex;
        border-bottom:1px solid #ccc;
        padding:10px 0;
        >dt{
            width: 40%;
            height: 100%;
            >img{
                width: 100%;
                height: 100%;
            }
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