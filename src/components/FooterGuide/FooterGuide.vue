<template>
  <footer class="footer_guide border-1px">
     <span class="guide_item" @click="goTo('/home')" :class="{on: $route.path==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" @click="goTo('/identify')" :class="{on: $route.path==='/identify'}">
    <span class="item_icon">
      <i class="iconfont icon-search"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/feilei')" :class="{on: $route.path==='/feilei'}">
    <span class="item_icon">
      <i class="iconfont icon-dingdan"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shop')" :class="{on: $route.path==='/shop'}">
    <span class="item_icon">
      <i class="iconfont icon-geren"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')" :class="{on: $route.path==='/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-geren"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods:{
      goTo (path){
        //通过路由导航跳转路由
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size (0.32*75/$rem)
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size (.53333*75/$rem)
</style>
