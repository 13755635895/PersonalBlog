import showMessage from "../utils/showMessage";
import axios from "axios";
const ins = axios.create();//创建一个axios的实例
ins.interceptors.response.use(function(resp){//拦截响应,统一处理数据
    if(resp.data.code!==0){
        showMessage({
            content:resp.data.msg,
            type:"error",
            duration:1500
        })
        return null;
    }
    return resp.data.data;
})
export default ins;
