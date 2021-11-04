//公共的获取远程数据的代码，各个组件可以使用获取不同数据的类型
//具体的组件中，需要提供一个获取远程数据的方法  fetchData
export default function(defaultDataValue = null){
    return{
        data(){
            return{
                isLoading:true,
                data:defaultDataValue,
            };
        },
        async created(){
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}