<template>
  <Pager :current="current" :total="total" @pageChange="handlePageChange($event)"/>
</template>

<script>
import Pager from "./"

export default {
    components:{
        Pager,
    },
    data(){
        return{
            current:1,
            total:302
        };
    },
    methods:{
        handlePageChange(newPage){
            this.current = newPage;
        }
    }
}
</script>
<style lang="less" scoped>

</style>