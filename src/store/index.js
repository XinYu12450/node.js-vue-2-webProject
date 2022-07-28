import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
//atcion层面处理业务逻辑  dispatch调用执行action
const actions={}

//mutation操作数据(修改) commit调用执行mutation
const mutations={}

//state数据存储 mapstate快速读取
const state={}

//getter配合组件computed配置使用 mapGetter调用执行getter
const getters={}

//模块化处理
const userState={
    namespaced:true,
    actions:{},
    mutations:{
        userlogin(state,value){
            state.userinfo = value
        }
    },
    state:{
        userinfo:{
            username:''
        }
    },
    getters:{}
}
//模块化需要 命名空间申明namespaced    Store内需要在配置项modules内配置
export default new Vuex.Store({
    modules:{
        userState
    }
})