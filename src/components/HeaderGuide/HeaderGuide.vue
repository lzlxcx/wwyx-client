<template>
  <div class="topHeader">
    <div></div>
    <div class="topBar">
      <div class="bd">
        <div class="topRow">
          <a class="iconZ" href="javascript:;"></a>
          <a href="javascript:;">
            <i class="logo"></i>
          </a>
          <div class="right">
            <a class="search" href="javascript:;">
              <i class="iconSearch"></i>
            </a>
            <a class="cart" href="javascript:;">
              <i class="iconCart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .topHeader
    position: fixed!important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%
    .topBar
      position: relative
      .bd
        height: (1.16*75/$rem)
        background-color: #fafafa
        .topRow
          z-index: 1;
          width: (10*75/$rem)
          margin: auto;
          overflow: hidden;
          position: relative;
          padding: 0 (.21333*75/$rem) 0 (.32*75/$rem)
          height: (1.17333*75/$rem)
          display: flex;
          align-items: center
          justify-content: space-between
          .iconZ
            width: (.64*75/$rem)
            height: (.58667*75/$rem)
            background-position: 0 (-.98667*75/$rem)
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
            background-repeat: no-repeat;
            background-size: (2.29333*75/$rem)(4.96*75/$rem)
          .logo
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto
            width: (3.29333*75/$rem)
            height: (.72*75/$rem)
            background-position: 0 (-1.70667*75/$rem)
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
            background-repeat: no-repeat;
            background-size: (2.29333*75/$rem) (4.96*75/$rem)
          .right
            margin-left: auto
            margin-right: (.06667*75/$rem)
            .search
              margin-right: (.26667*75/$rem)
              .iconSearch
                position: relative;
                bottom: 0
                width: (.85333*75/$rem)
                height: (.85333*75/$rem)
                background-position: 0 (-4.10667*75/$rem)
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
                background-repeat: no-repeat;
                background-size: (2.29333*75/$rem) (4.96*75/$rem)
                margin-right (-0.36*75/$rem)
            .cart
              .iconCart
                width: (.85333*75/$rem)
                height: (.85333*75/$rem)
                background-position: 0 0
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
                background-repeat: no-repeat;
                background-size: (2.29333*75/$rem) (4.96*75/$rem)
                margin-right (0.64*75/$rem)
</style>
