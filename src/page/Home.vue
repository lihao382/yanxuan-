<template>
  <div class="home">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item.picUrl" alt="">
            </van-swipe-item>
            
      </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:"home",
data() {
return {
    banner:[]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    axios.get("https://api.it120.cc/small4/banner/list").then((res)=>{
        console.log(res)
        this.banner=res.data.data
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.my-swipe{
    height: 426px;
    overflow: hidden;
}
 .my-swipe .van-swipe-item {
   
  }
</style>