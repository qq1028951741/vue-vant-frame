<template>
  <div class="authCodeSearch">
    <div class="title">
        <p style="color:white;font-size:19px;font-weight:bold;margin-top:65px;">精铃iELVES智能运维系统</p>
    </div>
    <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入授权码"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
    </div>
  </div>
</template>
<script>
export default {
  name: 'authCodeSearch',
  methods:{ //跳转页面
    onSearch(){
        this.$dialog.alert({
             message: "验证成功"
        })
    }
  },
  data(){
    return {
    }
  },
  mounted() {
    console.log("authCodeSearch渲染完成");
  }
};
</script>
<style lang="scss" scoped="true">

/deep/ .van-search--show-action{
    margin-top:500px;
    margin-left:200px;
    width:600px;
    height:100px;
}

</style>
