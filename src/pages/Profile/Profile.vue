<template>
  <div class="profile">
    <HeaderGuide/>

    <div class="profileContainer">
      <div class="profileContent">
        <div class="top">
          <div class="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btnWrap">
            <div class="btn1">
              <i class="btnIcon"></i>
              <span>手机号登录</span>
            </div>
            <div class="btn2">
              <i class="btnIcon"></i>
              <span>邮箱登录</span>
            </div>
            <div class="btn3">
              <span>手机号快速注册</span>
              <i class="btnIcon"></i>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide.vue'
  export default {
    data() {
      return {}
    },
    components:{
      HeaderGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .profileContainer
    height 623px
    .profileContent
      background: #F2F5F4
      height 100%
      .top
        .logo
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem


</style>
