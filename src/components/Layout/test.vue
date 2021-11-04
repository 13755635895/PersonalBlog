<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边</div>
      </template>
      <div class="main">主区域</div>
      <template #right>
        <div class="right">右边</div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 600px;
  /* border: 2px solid; */
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.main {
  background: lightgreen;
  width: 100%;
  height: 100%;
}
.right {
  width: 150px;
  height: 100%;
  background: lightpink;
}
</style>