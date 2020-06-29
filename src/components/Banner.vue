<template>
  <div id="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item.picUrl" alt="">
            </van-swipe-item>
      </van-swipe>
      <ul class="nav">
          <li>
              <img src="/static/4.png" alt="">
              <p>签到</p>
          </li>
          <li>
              <img src="/static/1.png" alt="">
              <p>礼券</p>
          </li>
          <li>
              <img src="/static/2.png" alt="">
              <p>砍价</p>
          </li>
          <li>
              <img src="/static/3.png" alt="">
              <p>专栏</p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:"banner",
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
.my-swipe .van-swipe-item img{
    width: 100%;
}
#banner{
    position: relative;
}
#banner .nav{
    width: 100%;
    height: 140px;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    text-align: center;
    border-radius: 20% 20% 0 0;
    border-bottom: 0.2rem solid #F5F5F5;
}
.nav li{
    width: 25%;
}
.nav li img{
    width: 58px;
}
.nav>li>p{
    font-size: 26px;
    margin-top: 17px;
}
</style>