<template>
    <li :class="{active:index==ind}" @click="$emit('clickFn',index)">{{Linkage}}</li>
</template>
<script>
export default {
    props:['Linkage',"index",'ind'],
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
<style scoped lang="">

</style>