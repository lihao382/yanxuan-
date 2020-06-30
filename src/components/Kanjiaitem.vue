<template>
            <li>
              <div class="left">
                  <img :src="d.pic" alt="">
              </div>
              <div class="right">
                  <p class="p2">{{d.name}}</p>
                  <p class="p3">{{d.characteristic}}</p>
                  <ol class="oll">
                      <li>
                          <p style="color:red">￥{{d.minPrice}}</p>
                          <p>低价</p>
                      </li>
                      <li>
                          <p style="color:#ccc">￥{{d.originalPrice}}</p>
                          <p style="color:#ccc">原价</p>
                      </li>
                      <li>
                          <p style="color:#ccc">{{d.stores}}</p>
                          <p style="color:#ccc">限量</p>
                      </li>
                  </ol>
              </div>
          </li>
</template>

<script>
export default {
name:"",
props:["d"],
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
li{
                display: flex;
                height: 1.8rem;
                border-bottom: 1px solid #ccc;
                padding: 0.1rem;
                .left{
                    margin: 0.15rem 0.15rem;
                    img{
                        width: 1.58rem;
                        height: 1.58rem;
                        border-radius: 0.06rem;
                        display: block;
                    }
                }
                .right{
                    .p2{
                        font-size: 0.18rem;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        margin-top: 0.1rem;
                    }
                    .p3{
                        font-size: 0.16rem;
                         height: 0.3rem;
                        line-height: 0.3rem;
                        color: #ccc;
                    }
                    .oll{
                        display: flex;
                        margin-top: 0.4rem;
                        li{
                            display: block;
                            font-size: 0.18rem;
                            margin-right: 0.3rem;
                            border: none;
                            p{
                                width: 0.5rem;
                                text-align: center;
                                margin: 0.05rem;
                            }
                        }
                    }
                }
            }
</style>