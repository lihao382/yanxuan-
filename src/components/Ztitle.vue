<template>
  <li>
    <img :src="d.pic" alt="" />
    <p>{{d.title}}</p>
    <p>{{d.descript}}</p>
  </li>
</template>

<script>
export default {
  name: "",
  props: ["d"],
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
li {
  width: 4.42rem;
  height: 2.84rem;
  margin-left: 0.12rem;
  img {
    width: 4.42rem;
    height: 2.84rem;
    display: block;
    border-radius: 0.06rem;
  }
  p:nth-of-type(1){
      font-size: 0.18rem;
      color: #2c2c2c;
      margin-top: 0.12rem;
      width: 4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  p:nth-of-type(2){
      font-size: 0.14rem;
      color: #a8a8a8;
      margin-top: 0.2rem;
      width: 3.24rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
  }
}
</style>
