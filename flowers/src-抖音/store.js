import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
       dialog:false,
       msgData:[{title:"给父级寰谛凤翎看了安居客了刚回来",num:1,flag:true},
                {title:"的概括历史记录刚看过",num:22,flag:false},
                {title:"给父级寰谛凤翎看了安居客了刚回来",num:3,flag:true}
                ,{title:"的概括历史记录刚看过",num:4,flag:false}]
    },
    getters:{
        getdiolog(state){
            return state.dialog
        },
        getmsgData(state){
            return state.msgData;
        }
    },
    mutations:{
        setdialog(state){
            state.dialog = true;
        },
        falseFn(state){
            state.dialog = false;
        },
        setdata(state,obj){
            state.msgData.push({title:obj,num:11,flag:false});
        },
        flagFn(state,ind){
            state.msgData[ind].flag = !state.msgData[ind].flag;
            if(state.msgData[ind].flag){
                state.msgData[ind].num++;
            }
            else{
                state.msgData[ind].num=state.msgData[ind].num;
            }
        }
    },
    actions:{

    }
})