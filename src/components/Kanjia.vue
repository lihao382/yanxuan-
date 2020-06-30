<template>
  <div id="kan">
      <p class="p1">全民砍价<van-icon name="arrow" /></p>
      <ul class="ull">
          <Kanjiaitem v-for="c in kanjia" :d="c"></Kanjiaitem>
      </ul>
  </div>
</template>

<script>
import Kanjiaitem from './Kanjiaitem'
export default {
name:"",
components:{Kanjiaitem},
data() {
return {
    kanjia:[]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.http.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res)=>{
        console.log(res.data.data)
        this.kanjia=res.data.data.goodsMap
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
    #kan{
        width: 100%;
        border-bottom: 0.01rem solid #e9e9e9;
        .p1{
            font-size: 0.2rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            border-bottom: 1px solid #ccc;
        }
        .ull{
            list-style: none;
           
        }
    }
</style>