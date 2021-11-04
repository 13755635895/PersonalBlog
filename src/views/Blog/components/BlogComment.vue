<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/components/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  data() {
    return {
      page: 1,
      limit: 10
    };
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea
  },
  created(){
    this.$bus.$on("mainScroll",this.handleScroll)
  },
  destoryed(){
  this.$bus.$off("mainScroll",this.handleScroll)
  },
  computed:{
    hasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
   async handleScroll(dom){
     if(this.isLoading || !dom){
       //正在加载就不需要再加载了
       return;
     }
     const range=50;
     const decs = Math.abs((dom.scrollTop + dom.clientHeight)-dom.scrollHeight)
     if(decs < range){
       this.fetchMore();
     }
    },
    async fetchData(){
      return await getComments(this.$route.params.id,this.page,this.limit);
    },
    //加载下一页
    async fetchMore(){
      if(!this.hasMore){
        //没有更多数据了
        return;
      }
      this.isLoading=true;
      this.page++;
      const resp =await this.fetchData();
      this.data.total = resp.total;
      this.data.rows=this.data.rows.concat(resp.rows);
      this.isLoading=false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); //告诉子组件，处理完了
    }
  }
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>