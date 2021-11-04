import Vue from "vue";
import Vuex from "vuex"
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
Vue.use(Vuex);//应用vuex插件
export default new Vuex.Store({
    //配置仓库对象
    // state:{
    //     //数据
    // },
    modules:{
        banner,
        setting,
        about,
        project
    },
    strict:true,
    //数据变更
    
    //1.mutations中不允许出现异步操作,甚至在实际开发中，不允许出现副作用操作（更改或操作外部信息）
    //2.vuex中,mutations是改变数据的唯一途径
    //3，附加信息payload 是数据产生变化的附加信息 可以是任何类型,表示负荷（负载）
    //4.改动数据操作是通过store.commite 提交一个mutations操作   this.$store.commit("方法2"，payloa'd)
    // mutations:{
    //     //定义方法来操控数据变化
        
    //     //方法1(state){}

    //     //方法2(state,payload){}
    // },

    //actions专门进行异步操作
    //异步需要进行分发dispath操作
    //用法 this.$store.dispatch("asyncFunction",payload)
    // actions:{
    //     // //异步操作函数
    //     // asyncFunction1(ctx,payload){
    //     //     setTimeout(() => {
    //     //         ctx.commit("方法2",payload)
    //     //     }, timeout);
    //     // },
    //     // asyncFunction2(ctx){
    //     //     ctx.commit("方法1")
    //     // }



    // }
})