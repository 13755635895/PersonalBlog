<template>
  <div class="img-loader-container">
    <img class="placeholder" :src="placeholder" alt="" v-if="!everythingDone" />
    <img
      @load="handleLoad"
      :src="src"
      :style="{ opacity: originOpacity, transition:`${duration}ms`}"
      alt=""
    />
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      defalut: 1000,
    },
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      everythingDone:false //是否一切都完成了
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(()=>{
          this.everythingDone = true;
          this.$emit("load");
      }, this.duration);
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.img-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover; //处理图片拉伸效果
  }
  .placeholder {
    filter: blur(1vw);
  }
}
</style>