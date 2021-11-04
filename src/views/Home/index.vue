<template>
  <div v-loading="loading" class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" @click="swithTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index <data.length - 1"
      @click="swithTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        @click="swithTo(i)"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
// import fetchData from "@/components/mixins/fetchData.js"
export default {
  // mixins:[fetchData([])], //组件混入
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, //整个容器的高度
      swithing: false, //是否正在滚动切换
    };
  },
  created(){
    this.$store.dispatch("banner/fetchBanner")
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    //当窗口发生变化高度改变
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    ...mapState("banner", ["loading","data"]),
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // //提供一个获取远程数据的方法
    // async fetchData(){
    //   return await getBanners();
    // },
    //切换轮播图
    swithTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.swithing) {
        return;
      }

      if (e.deltaY < -5 && this.index > 0) {
        this.swithing = true;
        //上一个
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        //下一个
        this.swithing = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.swithing = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%; 
    }
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  @gap: 25px;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 8px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    margin-bottom: 10px;
    &.active {
      background: #fff;
    }
  }
}
</style>