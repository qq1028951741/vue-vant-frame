<template>
  <div class="authFile">
     <div class="title">
            <p style="color:white;font-size:19px;font-weight:bold;margin-top:65px;">精铃iELVES智能运维系统</p>
     </div>
     <div class="imgFile">
        <img :src="authFile">
     </div>
  </div>
</template>
<script>

export default {
  name: 'authFile',
  data(){
    return {
        // 图片路径
        authFile: require('@/assets/images/authFile.jpg'),
    }
  },
   methods: {

  },
  mounted() {
    console.log("authFile渲染完成");
  }
};
</script>
<style lang="scss" scoped="true">
    .imgFile{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        img{
          position: absolute;
          top: 0;
          left: 100px;
          width: 80%;
          height: 130%;
        }
    }
</style>
