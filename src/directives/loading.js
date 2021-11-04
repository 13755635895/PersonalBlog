import loadingUrl from "@//assets/loading.svg";
import styles from "./loading.module.less";
/**
 * 自定义指令里提供了一些钩子函数 
 * bind()指令第一次绑定dom元素,
 * insert()dom元素插入父元素,
 * update()所在组件的VNode数据更新调用,
 */

//得到el中loading效果的img元素
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading]")
}
function createLoadingImage(){
    const img = document.createElement("img")  
    img.dataset.role = "loading" //给img加一个自定义属性
    img.src=loadingUrl;
    img.className=styles.loading;
    return img;
}
//导出指令的配置对象
export default function(el,binding){
    //根据binding.value的值 判断是否创建或删除img
    const curImg = getLoadingImage(el)
    if(binding.value){
        if(!curImg){
            const img = createLoadingImage();
            el.appendChild(img);
        }
    }
    else{
    if(curImg){
        curImg.remove()
    }
    }
}