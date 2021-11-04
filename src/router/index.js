import Vue from "vue";
import { titleController } from "@/utils";
import VueRouter from "vue-router";
Vue.use(VueRouter) //使用一个vue插件
import routes from "./routes"
const router = new VueRouter({//配置路由
  routes,
  mode: "history"
})
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
})
export default router;