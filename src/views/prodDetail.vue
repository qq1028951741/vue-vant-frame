<template>
  <div class="prodDetail">
    <div class="title">
        <p style="color:white;font-size:19px;font-weight:bold;margin-top:65px;">精铃iELVES智能运维系统</p>
    </div>
    <div class="picDis" style="background:#FFF;">
        <img :src="intro1" style="width:100%; height:100%; display:block;">
        <img :src="intro2" style="width:100%; height:100%; display:block;">
        <img :src="intro3" style="width:100%; height:100%; display:block;">
        <img :src="intro4" style="width:100%; height:100%; display:block;">
        <img :src="intro5" style="width:100%; height:100%; display:block;">
        <img :src="intro6" style="width:100%; height:100%; display:block;">
        <img :src="intro7" style="width:100%; height:100%; display:block;">
        <img :src="intro8" style="width:100%; height:100%; display:block;">
    </div>
  </div>
</template>
<script>
export default {
  name: 'prodDetail',
  data(){
    return {
    // 图片路径
     intro1: require('@/assets/images/intro1.png'),
     intro2: require('@/assets/images/intro2.png'),
     intro3: require('@/assets/images/intro3.png'),
     intro4: require('@/assets/images/intro4.png'),
     intro5: require('@/assets/images/intro5.png'),
     intro6: require('@/assets/images/intro6.png'),
     intro7: require('@/assets/images/intro7.png'),
     intro8: require('@/assets/images/intro8.png')
    }
  },
  mounted() {
    console.log("prodDetail渲染完成");
  }
};
</script>
<style lang="scss" scoped="true">
    .picDis{
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;
        margin-bottom: 10%;
        width: 800px;
        height: 1300px;
        overflow:auto;
    }
</style>
