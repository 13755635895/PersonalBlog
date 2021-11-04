// //事件总线
// const listeners={};
// export default {
//    //监听某个事件
//    $on(eventName,handler){
//     if(!listeners[eventName]){
//         listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//    },
   
//    //取消监听
//     $off(eventName,handler){
//         if(!listeners[eventName]){
//             return;
//         }
//         listeners[eventName].delete(handler)
//     },
//    //触发事件
//    $emit(eventName,...args){
//     if(!listeners[eventName]){
//         return;
//     }
//     for(const handler of listeners[eventName]){
//         handler(...args);
//     }
//    }
// }


import Vue from "vue";
const app = new Vue({});
//默认导出一个vue实例，vue实例中就有这三个函数,相当于事件总线

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * 滚动的dom元素,如果是nudefined，则表示dom元素已经不存在了
 * 
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条高度时触发
 * 参数：
 * 滚动高度
 */
Vue.prototype.$bus = app;
export default app;