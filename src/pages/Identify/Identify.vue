<template>
  <section class="shiWu">

   <!--<div class="topHeader">
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
       </div>-->
   <HeaderGuide/>
   <div class="shiWuContent">

     <div class="shiWuWra">
       <div class="swiper">
         <div class="swiper-container">
           <div class="swiper-wrapper">
             <a class="swiper-slide" href="javascript:;" v-for="(banner,index) in shiwu_data.banner" v-if="shiwu_data.banner" :key="index">
             <img :src="banner.picUrl">
             <div class="content">
               <div class="subTitle">{{banner.subTitle}}</div>
               <div class="title">{{banner.title}}</div>
               <div class="desc">{{banner.desc}}</div>
             </div>
           </a>
           </div>
           <div class="swiper-pagination"></div>
         </div>
       </div>
     </div>

    <!-- <div class="shiWuHd">
       <div class="HdContent">
         <div class="HdList">
           <a class="item" href="javascript:;" v-for="(column,index) in shiwu_data.column" v-if="shiwu_data.column" :key="index">
             <div class="imgContainer" :style="{background: `url(${column.picUrl})`}"></div>
             <div class="HdIcon">
               <div class="topNum">{{column.articleCount}}</div>
             </div>
             <div class="title">{{column.title}}</div>
           </a>
         </div>
       </div>
     </div>-->
     <div class="article">
       <div id="article-scroll" ref="article">
         <ul class="article-list">
           <li v-for="(column,index) in shiwu_data.column" v-if="shiwu_data.column" :key="index">
             <div class="img-container" :style="{background: `url(${column.picUrl})`}"></div>
             <div class="article-count">
               <div>{{column.articleCount}}</div>
             </div>
             <div class="title">{{column.title}}</div>
           </li>
         </ul>
       </div>
     </div>

     <!--<div class="shiWuTui">
       <div class="tuiContent">
         <div class="tuiTitle">为你推荐</div>
         <a class="mainItem" href="javascript:;">
           <div class="imgContent">
             <div class="tag">严选推荐</div>
           </div>
           <div class="imgInfo">
             <div class="line1">
               <div class="title">严选新中式厨房</div>
               <div class="price">
                 <span class="num">7.9</span>
                 <span class="unit">元起</span>
               </div>
             </div>
             <div class="line2">
               <div class="subTitle">百款餐厨好货，打造梦想厨房</div>
             </div>
           </div>
         </a>
       </div>
     </div>-->
     <div class="shiWuTui">
       <div class="tuiContent">
         <div class="tuiTitle">为你推荐</div>
         <MainItem :mainData="shiwu_data.recommendOne"/>
         <MinItem :minorData="shiwu_data.recommendTwo"/>
         <MinItem :minorData="shiwu_data.recommendThree"/>
       </div>
     </div>

     <div class="tenFifteen">
       <div class="inner">
         <div class="title">十点一刻</div>
         <div id="tenFifteenBS" ref="ten">
           <div class="list" v-if="shiwu_data.tenfifteen">
             <a class="main" href="javascript:;" v-for="(item,index) in shiwu_data.tenfifteen" :key="index">
               <div class="line-title">
                 <span>今日话题</span>
               </div>
               <div class="title">{{item.title}}</div>
               <div class="desc">{{item.desc}}</div>
               <div class="joinInfo">
                 <div class="joininner">
                   <div class="avatars" v-if="item.participantAvatar">
                     <div class="avatar" v-for="(avatar,index) in item.participantAvatar" :key="index" v-if="avatar">
                       <img :src="avatar" alt="">
                     </div>
                   </div>
                   <div class="joincount">
                     {{item.participantNum}}人参与话题
                   </div>
                 </div>
               </div>
             </a>
             <a class="more" href="javascript:;">
               <div class="inner">
                 <div class="text">查看全部话题</div>
                 <i class="right-icon"></i>
               </div>
             </a>
           </div>
         </div>
       </div>
     </div>

     <div class="shiWuTui">
       <div class="tuiContent">
         <div class="tuiTitle">严选甄品</div>
         <MainItem :mainData="shiwu_data.zhenOne"/>
         <MinItem :minorData="shiwu_data.zhenTwo"/>
         <MinItem :minorData="shiwu_data.zhenThree"/>
       </div>
     </div>

     <div class="look">
       <div class="lookTitle">严选LOOK</div>
         <div class="lookImg">
           <img src="//yanxuan.nosdn.127.net/43f61b61a77a729df490048c2f2f9ae9.jpg?imageView&quality=75" alt="">
         </div>
         <div class="imgInfo">
           <div class="author">
             <div class="avatar">
               <img src="//yanxuan.nosdn.127.net/40a508b48275880ad5217342b8b13355.jpg?imageView&quality=75&thumbnail=48y48" alt="">
             </div>
             <div class="authorName">vicyqueen</div>
           </div>
           <div class="desc">送闺蜜的，很漂亮嘿嘿</div>
         </div>
     </div>

     <div class="more">
       <div class="moreTitle">
         <div class="inner">更多精彩</div>
       </div>
       <div class="moreContent">
         <div>
           <a class="item" href="javascript:;" v-if="shiwu_data.findMore" v-for="(more,index) in shiwu_data.findMore" :key="index">
             <div class="imgContainer" :style="{backgroundImage:`url(${more.itemPicUrl})`}"></div>
             <div class="desc">{{more.title}}</div>
           </a>
         </div>
       </div>
     </div>

   </div>
 </section>

</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import MainItem from '../../components/ShiWuTui/MainItem/MainItem.vue'
  import MinItem from '../../components/ShiWuTui/MinItem/MinItem.vue'
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide.vue'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getShiwuData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
          new Swiper('.swiper-container',{
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: -5,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            loop:true
          });


        })
      });
    },
    methods:{
      _initScroll(){
        new BScroll(this.$refs.article,{
          click: true,
          scrollX:true,
        })
        new BScroll(this.$refs.ten,{
          click:true,
          scrollX:true
        })

      }
    },
    computed:{
      ...mapState(['shiwu_data']),

    },
    components:{
      MainItem,
      MinItem,
      HeaderGuide
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

   /* .topHeader
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
                  margin-right (0.64*75/$rem)*/
    .shiWuContent
      background-color: #f4f4f4;
      padding-bottom: 1.29333rem;
      line-height: 1.2;
      width: 10rem;
      margin: auto
      padding-top 1.16rem
      touch-action: none
      .shiWuWra
        width 100%
        height 100%
        background-color: #fff;
        overflow: hidden
        .swiper
          width 100%
          overflow hidden
          margin-bottom: .26667rem;
          background-color: #fff
          .swiper-container
            .swiper-wrapper
              .swiper-slide
                width: 690px
                position: relative;
                display: block;
                padding: 0 .13333rem;
                background-color: #fff
                img
                  display: block;
                  width: 100%
                  height: 5.13333rem;
                  border-radius: .10667rem
                .content
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto
                  display: flex
                  align-items: center
                  justify-content: center
                  flex-direction: column;
                  width: 6.21333rem;
                  height: 2.64rem;
                  background-color: rgba(255,255,255,.9)
                  .subTitle
                    position: relative;
                    font-size: .26667rem;
                    color: #7f7f7f;
                    line-height: .4rem;
                    padding: 0 .10667rem
                    &::before
                      content: ' ';
                      position: absolute;
                      top: 0;
                      left: -.32rem
                      bottom: 0;
                      margin: auto;
                      width: .32rem;
                      height: 1px;
                      background-color: #999;
                    &::after
                      content: ' ';
                      position: absolute;
                      top: 0;
                      right: -.32rem
                      bottom: 0;
                      margin: auto;
                      width: .32rem;
                      height: 1px;
                      background-color: #999
                  .title
                    font-size: .42667rem;
                    line-height: .64rem;
                    color: #333;
                    margin-top: .21333rem;
                    font-weight: 700
                  .desc
                    font-size: .32rem;
                    color: #333;
                    line-height: .48rem;
                    margin-top: .05333rem

            .swiper-pagination
              width: auto;
              right: 0;
              left: auto;
              margin-bottom: .21333rem;
              padding-right: .4rem
              position: absolute;
              text-align: center
              transform: translate3d(0,0,0);
              z-index: 10

      /*.shiWuHd
        overflow: hidden;
        padding: .42667rem .4rem .37333rem;
        height: 3.81333rem;
        background-color: #fff;
        margin-bottom: .26667rem
        .shiWuContent
          display flex
          margin-left: auto;
          margin-right: auto;
          position: relative
          z-index: 1
          .HdList
            flex 1
            display: flex
            .item
              position: relative;
              width: 2.18667rem;
              height: 2.8rem;
              margin-right: .32rem
              .imgContainer
                background-position: center;
                background-size cover
                background-repeat: no-repeat
                width: 2.18667rem;
                height: 2.18667rem;
                margin-bottom: .29333rem;
                border-radius: .05333rem
              .HdIcon
                position: absolute;
                top: 0;
                right: 0;
                color: #fff;
                width: 1.54667rem;
                height: .42667rem;
                border-radius: 0 .05333rem 0 0
                .topNum
                  position: absolute;
                  top: 0;
                  right: .10667rem;
                  width: 2rem;
                  height: .42667rem;
                  line-height: .42667rem;
                  text-align: right
                  font-size (24/$rem)
              .title
                color: #333;
                font-size: (.32*75/$rem)
                line-height: 1;
                text-align: center;
                width: 2.45333rem;
                margin-left: -.13333rem*/
      .article
        overflow: hidden;
        padding: .42667rem .4rem .37333rem;
        height: 3.81333rem;
        background-color: #fff;
        margin-bottom: .26667rem
        >#article-scroll
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
          display flex
          >.article-list
            flex 1
            display flex
            >li
              position: relative;
              width: 2.18667rem;
              height: 2.8rem;
              margin-right: .32rem
              >.img-container
                width: 2.18667rem;
                height: 2.18667rem;
                margin-bottom: .29333rem;
                border-radius: .05333rem
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat
              >.article-count
                position: absolute;
                top: 0;
                right: 0;
                color: #fff;
                width: 1.54667rem;
                height: .42667rem;
                border-radius: 0 .05333rem 0 0;
                >div
                  position: absolute;
                  top: 0;
                  right: .10667rem;
                  width: 2rem;
                  height: .42667rem;
                  line-height: .42667rem;
                  text-align: right
                  font-size (24/$rem)
              >.title
                color: #333;
                font-size: .32rem;
                line-height: 1;
                text-align: center;
                width: 2.45333rem;
                margin-left: -.13333rem
      /*.shiWuTui
        padding: 0 .4rem .53333rem;
        margin-bottom: .26667rem;
        background-color: #fff
        .tuiContent
          .tuiTitle
            background-color: #fff;
            text-align: center;
            font-size: .42667rem;
            height: 1.6rem;
            line-height: 1.6rem
            .mainItem
              display: block;
              position: relative;
              color: #333;
              border: 1px solid #d9d9d9;
              border-radius: .10667rem;
              overflow: hidden
              .imgContent
                background-image: url(//yanxuan.nosdn.127.net/ebddd90057e76f11633cc124d468a436.jpg?imageView&quality=75)
                background-position: center;
                background-repeat: no-repeat
                position: relative;
                height: 5.14667rem;
                border-radius: .10667rem .10667rem 0 0;
                overflow: hidden
                .tag
                  position: absolute;
                  top: .26667rem;
                  left: .26667rem
                  display: inline-block;
                  padding: 0 .21333rem;
                  height: .48rem;
                  line-height: .48rem;
                  background-color: rgba(255,255,255,.9);
                  border: 1px solid #d9d9d9;
                  border-radius: .26667rem;
                  color: #333
              .imgInfo
                overflow: hidden;
                position: relative;
                padding: .32rem 1.26667rem 0;
                background-color: #fff
                .line1
                  margin-bottom: .25333rem;
                  display: flex
                  justify-content: space-between
                  align-items: center;
                  line-height: 1.2
                  .title
                    flex: 1;
                    margin-right: .4rem;
                    font-size: .48rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden
                  .price
                    line-height: 1;
                    font-size: .42667rem;
                    text-align: center;
                    min-width: 1.53333rem
                    .num
                      font-size: .48rem
                    .unit
                      font-size  .48rem
                      line-height 1
                .line2
                  .subTitle
                    position: relative;
                    font-size: .37333rem;
                    line-height: 1.2;
                    color: #7f7f7f;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden*/
      .shiWuTui
        padding: 0 .4rem .53333rem;
        margin-bottom: .26667rem;
        background-color: #fff
        .tuiContent
          .tuiTitle
            background-color: #fff;
            text-align: center;
            font-size: .42667rem;
            height: 1.6rem;
            line-height: 1.6rem
      .tenFifteen
        overflow: hidden;
        padding: 0 .4rem .53333rem;
        height: 7.61333rem;
        background-color: #fff;
        margin-bottom: .26667rem
        .inner
          >.title
            background-color: #fff;
            text-align: center;
            font-size: .42667rem;
            height: 1.6rem;
            line-height: 1.6rem
          #tenFifteenBS
            display flex
            .list
              flex 1
              display flex
              a
                position: relative;
                width: 7.73333rem;
                height: 5.48rem;
                padding: .50667rem .53333rem 1.05333rem;
                margin-right: .4rem;
                text-align: center;
                color: #333
                box-sizing border-box
                display: inline-block;
                vertical-align: middle;
                &.main
                  position relative
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
                  background-repeat: no-repeat;
                  background-size: 100% 100%
                  >.line-title
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: .53333rem
                    &::before,&::after
                      content: ' ';
                      display: block;
                      width: .32rem;
                      height: 1px;
                      background-color: #7f7f7f
                    span
                      margin: 0 .10667rem;
                      font-size: .32rem;
                      color: #7f7f7f

                  >.title
                    font-size: .48rem;
                    font-weight: 700;
                    margin-bottom: .18667rem
                  >.desc
                    font-size: .37333rem;
                    line-height: 1.5;
                    display: block;
                    text-align center
                    overflow: hidden;
                    text-overflow: ellipsis

                  >.joinInfo
                    position: absolute;
                    bottom: 1.05333rem;
                    width: 6.66667rem;
                    text-align: center
                    >.joininner
                      display: inline-block;
                      overflow: hidden
                      >.avatars
                        float: left;
                        margin-right: .21333rem
                        >.avatar
                          position: relative;
                          float: left;
                          height: .64rem;
                          width: .64rem;
                          overflow: hidden;
                          border: 1px solid #fff;
                          border-radius: 50%
                      >.joincount
                        float: left;
                        text-align: left;
                        line-height: .64rem;
                        font-size: .32rem;
                        color: #7f7f7f
                &.more
                  position: relative;
                  height: 5.12rem;
                  border: (10*75/$rem) solid #e6e6e6;
                  padding: 0;
                  margin-right: 0;
                  background-color: #fafafa
                  >.inner
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 3.2rem;
                    height: .50667rem;
                    display: flex;
                    align-items: center
                    >.text
                      color: #7f7f7f;
                      font-size: .42667rem;
                      line-height: .50667rem;
                      margin-right: .22667rem
                    >.right-icon
                      display: inline-block;
                      vertical-align: middle;
                      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png);
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                      width: .4rem;
                      height: .4rem

      .look
        position: relative;
        display: block;
        color: #333
        .lookTitle
          background-color: #fff;
          text-align: center;
          font-size: .42667rem;
          height: 1.6rem;
          line-height: 1.6rem
        .lookImg
          width 100%
          position relative
          img
            width 100%
            display block
        .imgInfo
          overflow: hidden;
          position: relative;
          padding: .32rem .4rem .61333rem;
          background-color: #fff
          .author
            height: 0.64rem;
            font-size: 0.32rem
            margin-bottom: .32rem
            display flex
            line-height 100%
            .authorName
              padding-top (10*75/$rem)

          .desc
            font-size: .37333rem;
            line-height: 1.6;
            color: #7f7f7f
      .more
        margin: 0 .4rem .4rem
        .moreTitle
          height: 1.86667rem
          display flex
          align-items center
          &::before,&::after
            content: ' ';
            display: block;
            width: 3.52rem;
            height: 0.013333333333333rem
            background-color: #d9d9d9
          .inner
            margin: 0 .32rem;
            font-size: .37333rem;
            color: #333
        .moreContent
          display: block;
          color: #333
          .item
            display: block;
            padding: .32rem;
            margin-bottom: .4rem;
            background-color: #fff;
            color: #333
            .imgContainer
              background-image: url(//yanxuan.nosdn.127.net/88af2bdceecfa9eb1ebc8cbc85b4eb61.jpg?imageView&quality=75)
              background-position: center;
              background-repeat: no-repeat
              width: 8.56rem;
              height: 4.8rem
              background-color: #f4f4f4
            .desc
              background-color: #fff;
              font-size: .37333rem;
              padding-top: .38667rem;
              padding-bottom: .37333rem;
              line-height: 1.2;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden
</style>
