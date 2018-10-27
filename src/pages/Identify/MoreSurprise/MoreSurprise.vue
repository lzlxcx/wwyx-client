<template>
  <section class="exploreMore">
    <div class="line-title">
      <span class="inner">更多精彩</span>
    </div>
    <div class="content">
      <a href="javascript:;" class="item" v-for="item in data" :key="item.topicId">
        <img v-lazy="item.itemPicUrl" alt="img">
        <div class="desc">{{item.title}}</div>
      </a>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      surpise: Object,
      data: Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .exploreMore
    margin 0 (.4*75/$rem) (.4*75/$rem)
    .line-title
      height (1.86667*75/$rem);
      display flex
      align-items center
      &:before
        content ''
        display block
        width (3.52*75/$rem);
        height 1px
        background #d9d9d9
      &:after
        content ''
        display block
        width (3.52*75/$rem)
        height 1px
        background #d9d9d9
      .inner
        margin 0 (.32*75/$rem)
        font-size (.37333*75/$rem)
        color #333333
    .content
      display: block;
      color: #333;
      >.item
        display block
        padding (.32*75/$rem)
        background #ffffff
        color #333333
        margin-bottom (.4*75/$rem)
        >img
          width (8.56*75/$rem)
          height (4.8*75/$rem)
        >.desc
          font-size (.37333*75/$rem)
          padding-top: (.38667*75/$rem);
          padding-bottom: (.37333*75/$rem);
          line-height 1.2
          ellipsis()
</style>
