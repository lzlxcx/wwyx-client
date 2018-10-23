<template>
  <section class="home">
    <div class="homeHeader">
      <div class="homeContent">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <i class="search_icon"></i>
          <span>搜索商品，共16679款好物</span>
        </div>
      </div>
        <div class="listContent" ref="listContent">
          <ul class="navList">
            <li v-for="(list,index) in lists" :key="index" :class="{active:index === isActive}" @click="isNow(index)">{{list}}</li>
          </ul>
        </div>
      </div>

    <div class="homeWra">
      <div class="navWra">
        <div class="navSlide">
          <div class="wraContainer">
            <div class="swiperWra" >
              <div class="swiper-container">
                <div class="wraSlide">
                  <img src="https://yanxuan.nosdn.127.net/2b5b07ddf3f5aae92cfa355587f39f05.jpg?imageView&quality=75&thumbnail=750x0" alt="logo">
                </div>
                <div class="wraSlide">
                  <img src="https://yanxuan.nosdn.127.net/f8dcd65c11106261e0030638914c9b64.jpg?imageView&quality=75&thumbnail=750x0" alt="logo">
                </div>
                <div class="wraSlide">
                  <img src="https://yanxuan.nosdn.127.net/2b5b07ddf3f5aae92cfa355587f39f05.jpg?imageView&quality=75&thumbnail=750x0" alt="logo">
                </div>
                <div class="wraSlide">
                  <img src="https://yanxuan.nosdn.127.net/2b5b07ddf3f5aae92cfa355587f39f05.jpg?imageView&quality=75&thumbnail=750x0" alt="logo">
                </div>
                <div class="wraSlide">
                  <img src="https://yanxuan.nosdn.127.net/2b5b07ddf3f5aae92cfa355587f39f05.jpg?imageView&quality=75&thumbnail=750x0" alt="logo">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="service">
        <ul class="grow">
          <li class="item">
            <a href="javascript:;">
              <i class="icon"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <i class="icon"></i>
              <span class="text">30天无忧退货</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <i class="icon"></i>
              <span class="text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="homeTwo">
      <header class="hd">
        <a class="more" href="">
          <span>品牌制造商直供</span>
          <i class="twoIcon"></i>
        </a>
      </header>

      <div class="twoContainer">
        <ul class="twoList">
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">海外制造商</h4>
                <div class="price">
                  <span class="price1">9.9</span>
                  <span class="price2">元起</span>
                </div>
                <i class="newIcon"></i>
              </div>
              <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="">
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">CK制造商</h4>
                <div class="price">
                  <span class="price1">25</span>
                  <span class="price2">元起</span>
                </div>
                <i class="newIcon"></i>
              </div>
              <img src="http://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65" alt="">
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">新秀丽制造商</h4>
                <div class="price">
                  <span class="price1">34.9</span>
                  <span class="price2">元起</span>
                </div>
              </div>
              <img src="http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65" alt="">
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">MUJI制造商</h4>
                <div class="price">
                  <span class="price1">39.9</span>
                  <span class="price2">元起</span>
                </div>
              </div>
              <img src="http://yanxuan.nosdn.127.net/b0b0ea6b866039d9ded1dfa39bf1a105.png?imageView&thumbnail=355x0&quality=65" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  export default {
    data(){
      return{
        isActive: 0,
        lists:['推荐','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区']
      }
  },
    mounted(){

      if (!this.lists){
        return
      }
      this._initScroll()

      setTimeout(() => {
        //初始化显示之后执行
        new Swiper ('.swiperWra', {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      },1000)
    },
    methods:{
      _initScroll(){
        new BScroll(this.$refs.listContent,{
          click:true,
          scrollX:true
        })
      },
      isNow(index){
        this.isActive=index
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    height 100%
    .homeHeader
      background-color #fff
      display flex
      flex-direction column
      z-index 10
      .homeContent
        display: flex
        flex-flow: row nowrap
        align-items: center
        padding: (.21333*75/$rem) (.4*75/$rem)
        line-height 1.5
        .logo
          width (1.84*75/$rem)
          height (.53333*75/$rem)
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
          display inline-block
          margin-right (.26667*75/$rem)
          background-size cover
          background-position center
        .search
          display: flex;
          flex-grow: 1;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          height: (.74667*75/$rem)
          font-size: (.37333*75/$rem)
          background-color: #ededed;
          border-radius: (.10667*75/$rem)
          .search_icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: (.37333*75/$rem)
            height: (.37333*75/$rem)
            margin-right: (.13333*75/$rem)
          span
            color #666

      .listContent
        width: 100%
        overflow: hidden;
        background: #ffffff;
        display: flex;
        padding: 0 0 12px 0;
        height (60/$rem)
        flex-flow nowrap
        .navList
          padding: 0 0 12px 0;
          display: flex;
          flex-direction row
          justify-content: space-between;
          align-items: center;
          li
            text-align: center;
            flex-shrink:0;
            flex-wrap:nowrap;
            margin: (0.5*75/$rem)
            font-size: (.37333*75/$rem)
            &.active
              padding: 0 0 12px 0;
              color: #b4282d;
              border-bottom: 3px solid #b4282d;
    .homeWra
      margin-bottom (.26667*75/$rem)
      background-color #fff
      .navWra
        height (4.93333*75/$rem)
        position: relative
        .navSlide
          padding-top (4.93333*75/$rem)!important
          position relative
          width 100%
          overflow hidden
          .wraContainer
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .swiperWra
              margin-left: auto;
              margin-right: auto;
              position: relative;
              overflow: hidden;
              z-index: 1;
              .swiper-container
                z-index: 1;
                display: flex
                box-sizing: content-box
              .swiper-pagination
                width: 100%
                position: absolute;
                bottom: 10px;
                left: 0;
                text-align: center;
                transition: .3s;
                transform: translate3d(0,0,0);
                z-index: 10;

      .service
        background #fff
        .grow
          width 100%
          height (.96*75/$rem)
          padding 0 (.4*75/$rem)
          display flex
          align-items center
          flex-flow nowrap
          zoom: 1
          .item
            flex 1
            float left
            display flex
            justify-content center
            align-items center
            a
              flex 1
              display flex
              vertical-align middle
              height (.42667*75/$rem)
              justify-content center
              .icon
                display inline-block
                vertical-align middle
                background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
                background-repeat no-repeat
                background-size 100% 100%
                width (.42667*75/$rem)
                height (.42667*75/$rem)
              .text
                font-size (.32*75/$rem)
                color #333
                margin-left: (.10667*75/$rem)
                line-height: (.42667*75/$rem)
                display: inline-block;
                vertical-align: middle;
    .homeTwo
      margin-bottom: (.26667*75/$rem)
      background-color: #fff;
      .hd
        display flex
        flex-flow nowrap
        -webkit-box-align: center
        align-items: center
        -webkit-box-pack: center
        justify-content: center;
        height: (1.46667*75/$rem)
        font-size: (.42667*75/$rem)
        .more
          -webkit-box-align: center
          display: flex
          flex-flow: row nowrap;
          color: #333;
          .twoIcon
            margin-left: (.13333*75/$rem)
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: (.4*75/$rem)
            height: (.4*75/$rem)

      .twoContainer
        padding-bottom: (.10667*75/$rem)
        .twoList
          position: relative;
          margin: 0 (.21333*75/$rem)
          height: (6.24*75/$rem)
          overflow: hidden;
          .item:nth-child(1),.item:nth-child(3)
            margin-right: (.10667*75/$rem)
          .item
            display: inline-block;
            float left
            position: relative;
            margin-bottom: (.10667*75/$rem)
            width: (4.73333*75/$rem)
            height: (3.14667*75/$rem)
            overflow: hidden;
            background-color: #f4f4f4;
            a
              width 100%
              height 100%
              .cnt
                position: absolute;
                left: 0;
                top: 0;
                padding: (.26667*75/$rem) 0 0 (.26667*75/$rem)
                width: 100%;
                z-index: 4;
                .title
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  color: #333;
                  font-size: (.37333*75/$rem)
                  line-height: (.45333*75/$rem)
                  margin-bottom: (.08*75/$rem)
                .price
                  display flex
                  .price1
                    color: #333;
                    font-size: (.37333*75/$rem)
                    line-height: (.45333*75/$rem)
                  .price2
                    color: #333;
                    font-size: (.32*75/$rem)
                    line-height: (.45333*75/$rem)
                .newIcon
                  display: inline-block
                  margin-top: (.13333*75/$rem)
                  background-repeat: no-repeat;
                  background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png)url("")
                  height: (.42667*75/$rem);
                  vertical-align middle
                  background-size 100% 100%
              img
                width: 100%;
                height: 100%;

</style>
