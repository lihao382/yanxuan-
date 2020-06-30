<template>
  <div id="zt">
    <div>
      <p>精选专题</p>
      <van-icon name="arrow" />
    </div>
    <!-- <p class="p1"></p> -->
    <ul>
      <Ztitle v-for="item in list" :key="item.id" :d="item"></Ztitle>
    </ul>
  </div>
</template>

<script>
import Ztitle from "../components/Ztitle";
export default {
  name: "",
  components: { Ztitle },
  data() {
    return {
      list: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.http.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#zt {
  width: 100%;
  height: 4.42rem;
  border-bottom: 0.01rem solid #e9e9e9;
  overflow: auto;
  div {
    font-size: 0.22rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0 2rem;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    height: 0.65rem;
  }
  ul {
    width: 22.7rem;
    display: flex;
  }
}
</style>
