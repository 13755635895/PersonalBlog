<template>
<div @click="handleClick" class="to-top-container" v-show="show">
    ToTop
</div>
</template>

<script>
export default {
data(){
    return {
        show:false
    }
},
mounted(){
    this.$bus.$on("mainScroll",this.handleScroll);
},
destoryed(){
 this.$bus.$off("mainScroll",this.handleScroll);
},
methods:{
    handleClick(){
        //回到顶部
        this.$bus.$emit("setMainScroll",0)
    },
     handleScroll(dom){
         if(!dom){
             this.show=false;
             return;
         }
         this.show = dom.scrollTop >=500;
    }
}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container{
    font-size: 12px;
    color: white;
background: @primary;
height: 50px;
width: 50px;
border-radius: 50%;
position: fixed;
z-index: 999;
right: 25px;
bottom: 40px;
cursor: pointer;
line-height: 50px;
text-align: center;
}
</style>