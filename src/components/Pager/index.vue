<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current-1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总的数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总的页码数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers(){
        let nums=[];
        for(let i=this.visibleMin;i<=this.visibleMax;i++){
            nums.push(i)
        }
        return nums;
    },
  },
  methods:{
      handleClick(newPage){
          //抛出一个事件
          if(newPage <1){
              newPage = 1;
          }
          if(newPage> this.pageNumber){
              newPage = this.pageNumber
          }
          if(newPage === this.current){
              return;
          }
          //子组件抛出事件后需要在父组件中注册事件--注册事件
          this.$emit("pageChange",newPage) //参数1：参数名 参数2：事件参数
      }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    font-size: 16px;
    color: @primary;
    margin: 0px 7px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>