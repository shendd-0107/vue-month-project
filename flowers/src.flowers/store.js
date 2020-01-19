import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        buylist:[]
    },
    getters:{
        getbuylist(state){
            return state.buylist;
        }
    },
    mutations:{
        setlist(state,{Subject,ind,item1}){

            let index = state.buylist.findIndex(item=>item.Subject==Subject)
            if(index == -1){
                state.buylist.push({Subject,item1})
            }
            else{
                state.buylist[index].item1 = item1;
            }
            
        }
    },
    actions:{

    }
})