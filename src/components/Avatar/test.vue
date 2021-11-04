<template>
  <div>
    <h1>APP组件</h1>
    <Avatar 
    url="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=878276761,2375089709&fm=26&gp=0.jpg"
    :size="100"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components:{
    Avatar
  }
}
</script>

<style>

</style>