import "./mock";
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router"
import showMessage from "./utils/showMessage";
import "../eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting")
//向vue实例中加一个方法，所有组件将都拥有这个方法
Vue.prototype.$showMessage = showMessage;
import "./api/banner";

//注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading",vLoading)

import vLazy from "./directives/lazy"
Vue.directive("lazy",vLazy);

 const vm = new Vue({
  store,
  router,
  render:(h) => h(App),
}).$mount('#app')

console.log(vm)

//测试一下事件总线

// import eventBus from "../eventBus"; 
// function handler1(data) {
//   console.log("handle1", data)
// }

// function handler2(data) {
//   console.log("handle2", data)
// }
// eventBus.$on("event1",handler1);
// eventBus.$on("event1",handler2);
// eventBus.$on("event2",handler1);

// window.eventBus = eventBus;





//测试博客

// import * as blogApi from "./api/blog";

// blogApi.getBlogCategories().then(r=>{
//   console.log("博客分类",r)
// })

// blogApi.getBlogs(2,20,3).then(r=>{
//   console.log("博客",r)
// })


//得到组件生成的根DOM
// function getComponentRootDom(comp,props){
//   const vm=new Vue({
//     render:(h)=>h(comp,{props})
//   });
//   vm.$mount();//生成真实的DOM,但不放到页面上去
//   return vm.$el;//得到渲染出来的真实DOM
// }