import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        left:[],
        right:[],
       
    },
    getters:{
       getterleft(state){
           return state.left;
       },
       getterright(state){
           return state.right;
       },
       getterarr(state){
           return state.arr;
       }
    },
    mutations:{
        setleft(state,obj){
            state.left = obj
        },
        setright(state,obj){
            state.right = obj;
        },
       
    },
    actions:{
        getleft({commit}){
            axios.get("/api/left").then(res=>{
                commit("setleft",res.data);
                console.log(res.data);
            })
        },
        getright({commit}){
            axios.get("/api/right").then(res=>{
                commit("setright",res.data);
                console.log(res.data);
            })
        }
    }
})