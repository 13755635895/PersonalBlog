<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/components/mixins/fetchData.js";
import * as msgApi from "@/api/message.js";
import  mainScroll  from "@/components/mixins/mainScroll.js";
export default {
  components: {
    MessageArea
  },
  data() {
    return {
page: 1,
    limit: 10,
    }
    
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed:{
    hasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
  
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  methods: {
    async fetchData() {
      return msgApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(data,callback) {
      const resp = await msgApi.postMessages(data);
      callback("感谢您的留言！");
      this.data.rows.unshift(resp);
      this.data.total++
    },
    handleScroll(dom){
      if(this.isLoading || !dom){
        return;//表示目前正在加载更多
      }
      const range = 100;//定一个范围
      const desc = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(desc <=range){
        this.fetchMore();
      }
    },
    async fetchMore(){
      if(!this.hasMore){
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    }
  }
};
</script>

<style scoped lang="less">
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 25px 20px;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 80%;
  margin: 0 auto;
}
</style>