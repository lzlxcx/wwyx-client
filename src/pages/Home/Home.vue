<template>
  <section class="home">
    <div class="homeHeader">
      <div class="homeContainer">
        <div class="homeContent">
          <a href="javascript:;" class="logo"></a>
          <div class="search">
            <i class="search_icon"></i>
            <span>搜索商品，共16679款好物</span>
          </div>
        </div>
        <div class="listContainer">
          <div class="listContent" ref="listContent">
            <ul class="navList">
              <li v-for="(list,index) in lists" :key="index" :class="{active:index === isActive}" @click="isNow(index)">
                <span>{{list}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="homeWra">
      <div class="navWra">
        <div class="navSlide">
          <div class="wraContainer">
            <div class="swiper" >
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(slideImg,index) in home_data.focusList" :key="index">
                    <img :src="slideImg.picUrl">
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="service" v-if="home_data.policyDescList">
        <ul class="grow">
          <li class="item" v-for="(item,index) in home_data.policyDescList" :key="index">
            <a href="javascript:;">
              <i class="icon"></i>
              <span class="text">{{item.desc}}</span>
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
          <li class="item" v-for="(tag,index) in tagList" :key="index">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">{{tag.name}}</h4>
                <div class="price">
                  <span class="price1">{{tag.floorPrice}}</span>
                  <span class="price2">元起</span>
                </div>
                <i class="newIcon" v-show="tag.newOnShelf"></i>
              </div>
              <img :src="tag.picUrl">
            </a>
          </li>
        </ul>
      </div>
    </div>

   <!-- <div class="homeThree">
      <header class="threeHd">
        <a class="threeMore" href="javascript:;">
          <span>新品首发</span>
          <div class="all">
            <span class="wra">
              <span>查看全部</span>
              <i class="arrow-right"></i>
            </span>
          </div>
        </a>
      </header>

      <div class="grid">
        <div class="threeContainer" ref="threeContainer">
          <ul class="threeList">
            <li class="threeItem" v-for="(item,index) in home_data.newItemList" :key="index">
              <a class="good" href="javascript:;">
                <div class="threeImg">
                  <div class="threeWra">
                    <div class="lazyLoad">
                      <img :src="item.listPicUrl">
                    </div>
                  </div>
                </div>
                <div class="name">
                  <span>{{item.name}}</span>
                </div>
                <div class="newItemDesc">{{item.simpleDesc}}</div>
                <div class="threePrice">
                  <span>
                    <span>¥</span>
                    <span>{{item.retailPrice}}</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>-->
    <HomeThree :className = '"newItemList"' :Items = 'home_data.newItemList'  v-if="home_data.newItemList"/>
    <HomeThree :className = '"popularItemList"' :Items = 'home_data.popularItemList'  v-if="home_data.popularItemList"/>

    <!--<div class="HomeFour">
      <a href="javascript:;">
        <div class="flash">
          <div class="left-item">
            <div class="title">严选限时购</div>
            <div class="m-countdown">
              <span class="hours"></span>
              <span class="colon"></span>
              <span class="mins"></span>
              <span class="colon"></span>
              <span class="secs"></span>
            </div>
            <div class="next-title">
              <span>
                <span>下一场 </span>
                <span>18:00</span>
                <span> 开始</span>
              </span>
            </div>
          </div>

          <div class="right-item">
            <div class="m-lazyload ">
              <img src="http://yanxuan.nosdn.127.net/202d36fa241b58d7c4418325da50557b.png?imageView&quality=85&thumbnail=330x330" alt="">
            </div>
            <div class="price">
              <div class="price-now28">
                <span class="rmb1"></span>
                <span>352</span>
              </div>
              <div class="price-origin28">
                <span class="rmb2"></span>
                <span class="t">439</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>-->
    <div class="limitTime" v-if="home_data.flashSaleIndexVO">
      <a>
        <div class="limitTime-warp">
          <div class="left-item">
            <div class="title">严选限时购</div>
            <div class="countdown">
              <span class="hours time" >{{hour}}</span>
              <span class="colon" >:</span>
              <span class="mins time" >{{mins}}</span>
              <span class="colon" >:</span>
              <span class="secs time" >{{secs}}</span>
            </div>
            <div class="next-title">
              <span>下一场</span>
              <span >{{home_data.flashSaleIndexVO.nextStartTime | date-format("HH:mm")}}</span>
              <span>开始</span>
            </div>
          </div>
          <div class="right-item">
            <div class="imgWarp">
              <img :src="home_data.flashSaleIndexVO.primaryPicUrl" alt="">
            </div>
            <div class="price">
              <div class="nowPrice">
                <span class="rmb">￥</span>
                <span>{{home_data.flashSaleIndexVO.activityPrice}}</span>
              </div>
              <div class="originPrice">
                <span class="rmb">￥</span>
                <span>{{home_data.flashSaleIndexVO.originPrice}}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="m-sale">
      <a href="javasctipt:;"></a>
    </div>

    <div class="homeLast">
      <header class="lastHd">
        <a class="more" href="javascript:;">
          <span>专题精选</span>
          <i class="lastIcon"></i>
        </a>
      </header>

      <div class="lastImg">
        <div class="lastInner" ref="lastInner">
          <ul class="imgList" v-if="home_data.topicList">
            <li class="imgItem" v-for="(topic,index) in home_data.topicList" :key="index">
              <a class="imgWrap" href="">
                <img :src="topic.scenePicUrl">
              </a>
              <div class="line1">
                <h4>{{topic.title}}</h4>
                <span>{{topic.priceInfo}}元起</span>
              </div>
              <div class="desc">{{topic.subtitle}}</div>
            </li>
          </ul>
        </div>
      </div>


    </div>

    <HomeLastList v-for="(list,index) in home_data.cateList" v-if="home_data.cateList" :lastList="list" :key="index"/>

    <div class="downLoad-copyright">
      <div>
        <div class="downLoad">
          <a href="javascript:;">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <p class="copyright">
          <span>网易公司版权所有 © 1997-2018</span>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>



<!--    <div class="newsWarp" v-if="isShowNews">
      <div class="mask"></div>
      <i class="close-button" @click = 'isShowNews = false'></i>
      <div class="detail-wapr">
        <div class="content">
          <div class="xinren">
            <span class="title">新人专享礼</span>
          </div>
          <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
          <div class="newItem">
            <div class="imgWarp">
              <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232"">
            </div>
            <div class="text">
              <div class="name">埃及进口长绒棉毛巾</div>
              <div class="manu">
                <span>Ralph Lauren</span>
              </div>
              <div class="price">
                <span class="nowPrice">￥32.00</span>
                <span class="originPrice">￥199.00</span>
              </div>
            </div>
          </div>
          <div class="actCouponBtn">
            <span>领券立减¥10.00</span>
          </div>
          <a href="javascript:;" class="checkMore">
            查看更多特惠商品
          </a>
        </div>
      </div>
    </div>-->

    <i class="goToTop" @click="goToTop" v-if="isShowGotoTop"></i>

  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  import HomeThree from '../../components/HomeThree/HomeThree.vue'
  import HomeLastList from '../../components/HomeLastList/HomeLastList.vue'
  export default {
    data(){
      return{
        isActive: 0,
        countdownTime:0,
        isShowGotoTop:false,
        isShowNews:true,
        lists:['推荐','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区']
      }
  },
    computed:{
      ...mapState(['home_data']),
      tagList(){
        if (this.home_data.tagList){
          const tagList = this.home_data.tagList.splice(0,4)
          return tagList
        }else {
          return
        }
      },

      hour(){
        const hour = Math.floor(this.countdownTime/(1000*60*60));
        return hour>10? hour : '0'+hour
      },
      mins(){
        const mins = Math.floor(this.countdownTime/(1000*60)%60)
        return mins>10? mins : '0'+mins
      },
      secs(){
        const secs = Math.floor(this.countdownTime/1000%60);
        return secs>10? secs : '0'+secs
      }

    },
    mounted(){

      const timer = setInterval(()=>{
        this.countdownTime -= 100
      },100);

      this.$store.dispatch('getHomeData', () => {
        if (!this.lists){
          return
        }

        this.$nextTick(() => {


          this._initScroll()
          //初始化显示之后执行
          this.countdownTime = this.home_data.flashSaleIndexVO.remainTime;

          new Swiper ('.swiper-container', {
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
        })
      })

    },
    methods:{



      goToTop(){

        this.isShowGotoTop = !this.isShowGotoTop
       /* document.body.scrollTop = document.documentElement.scrollTop = 0;*/
       /* scrollTo(0,0);*/
        let timer  = null;

        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
          const oTop = document.body.scrollTop || document.documentElement.scrollTop;
          if(oTop > 0){
            scrollTo(0,oTop-300);
            timer = requestAnimationFrame(fn);
          }else{
            cancelAnimationFrame(timer);
          }
        });

      },

      _initScroll(){
      /*  const lastInner = document.querySelector('.lastInner');*/
        new BScroll(this.$refs.listContent,{
          click:true,
          scrollX:true
        })

        new BScroll(this.$refs.lastInner,{
          click:true,
          scrollX:true
        })
      },
      isNow(index){
        this.isActive=index
      }
    },
    components:{
      HomeThree,
      HomeLastList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  body
    overflow-y: auto;
    overflow-x: hidden;

    .home
      width 100%
      height 100%
      touch-action: none
      .homeHeader
        background-color #fff
        display flex
        flex-direction column
        position: fixed
        z-index 10
        .homeContainer
          position: fixed!important;
          left: 0;
          top: 0;
          z-index: 5;
          width: 100%
          background-color #fff
          &::after
            content: '';
            position: absolute;
            background-color: #d9d9d9;
            left: 0;
            width: 100%;
            height: 1px;
            bottom: 0
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

          .listContainer
            width 100%
            display flex
            flex-direction column
            flex 1
            .listContent
              width: 100%
              display: flex;
              .navList
                height: .8rem;
                display: flex;
                flex-shrink: 0;
                background: #fff;
                li
                  margin-left: .64rem;
                  position relative
                  display: block;
                  padding: 0 .21333rem;
                  line-height: .8rem;
                  font-size: .37333rem;
                  color: #333;
                  text-align: center;
                  vertical-align middle
                  &.active::after
                    content: ' ';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: .05333rem;
                    background-color: #b4282d
      .homeWra
        margin-top 148px
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
              .swiper
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                z-index: 1;
                .swiper-container
                  z-index: 1;
                  display: flex
                  box-sizing: content-box
                  .swiper-wrapper
                    img
                      width 100%
                      height 100
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
                    display: block
                    margin-top: (.13333*75/$rem)
                    background-repeat: no-repeat;
                    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png)url("")
                    height: (.42667*75/$rem);
                    vertical-align middle
                    background-size 100% 100%
                    width (.85333*75/$rem)
                img
                  width: 100%;
                  height: 100%;

  /*    .homeThree
        margin-bottom: (.26667*75/$rem)
        background-color: #fff;
        .threeHd
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
          background-size: (10*75/$rem) (3.46667*75/$rem)
          height: (3.46667*75/$rem)
          margin-bottom: (.42667*75/$rem)
          position: relative;
          display: flex;
          flex-flow: row nowrap;
          -webkit-box-align: center
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center
          font-size: (.42667*75/$rem)
          .threeMore
            display: block;
            text-align: center;
            font-size: (.48*75/$rem)
            color: #8BA0B6;
            -webkit-box-align: center
            align-items: center
            flex-flow: row nowrap
            .all
              position: relative;
              margin: (.21333*75/$rem) auto 0;
              width: (3.2*75/$rem)
              height: (.74667*75/$rem)
              font-size: (.37333*75/$rem)
              line-height: (.74667*75/$rem)
              background: #D8E5F1;
              .wra
                width: (1.70667*75/$rem)
                display: inline-block;
                text-align: left;
                .arrow-right
                  position: absolute;
                  top: (.22667*75/$rem)
                  background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png);
                  background-size: (.13333*75/$rem) (.29333*75/$rem)
                  display: inline-block;
                  height: (.29333*75/$rem)
                  width: (.13333*75/$rem)
                  margin-left: (.08*75/$rem)
        .grid
          height: (6.4*75/$rem)
          background-color: #fff;
          display flex
          .threeContainer
            .threeList
              display flex
              .threeItem
                position relative
                margin-left: (.4*75/$rem)
                width: (3.73333*75/$rem)
                height 100%
                float: left
                overflow: hidden;
                background-color: #fff
                .good
                  display: block
                  width: 100%
                  .threeImg
                    border-radius: (.05333*75/$rem)
                    position: relative;
                    z-index: 0
                    background-color: #f4f4f4;
                    .threeWra
                      background-color: #f4f4f4
                      margin-bottom: (.26667*75/$rem)
                      .lazyLoad
                        width: 100%
                        img
                          display block
                          background-color: #f4f4f4;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%
                          border-radius: (.05333*75/$rem) (.05333*75/$rem) 0 0;
                    .desc
                      display none
                      float left
                      position: absolute;
                      bottom: 0;
                      width: 100%;
                      background: #F1ECE2;
                      border-radius: 0 0 (.05333*75/$rem) (.05333*75/$rem)
                      font-size: (.32*75/$rem)
                      color: #9F8A60;
                      letter-spacing: 0;
                      line-height: (.38667*75/$rem)
                      padding: (.26667*75/$rem) (.13333*75/$rem)
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      overflow: hidden;
                  .name
                    margin-bottom: (.13333*75/$rem)
                    padding: 0 (.13333*75/$rem)
                    font-size: (.37333*75/$rem)
                    line-height: (.45333*75/$rem)
                    margin-top: (.13333*75/$rem)
                    text-align: left
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    color: #333;
                  .newItemDesc
                    display: block;
                    margin-bottom: (.18667*75/$rem)
                    font-size: (.32*75/$rem)
                    color: #7f7f7f;
                    line-height: (.4*75/$rem)
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    padding: 0 (.13333*75/$rem)
                  .threePrice
                    padding: 0 (.13333*75/$rem)
                    font-size: (.37333*75/$rem)
                    line-height: 1
                    text-align: left
                    font-family: PingFangSC-Regular*/
/*      .flash
        padding: .4rem .53333rem .4rem .74667rem;
        margin-bottom: .26667rem;
        height: 5.06667rem;
        background: #fff
        display: flex;
        .left-item
          display: flex;
          flex: 1
          -webkit-box-direction: normal;
          -webkit-box-orient: vertica
          flex-direction: column;
          padding-top: 1.06667rem
          .title
            font-size: .48rem;
            line-height: .48rem;
            margin-bottom: .32rem;
            color: #333;
            letter-spacing: .16rem
          .m-countdown
            display: inline
            .colon
              color: #333;
              font-size: .4rem;
              width: .26667rem;
              display: inline-block;
              text-align: center;
              font-weight: 700
            .hours
              display: inline-block;
              line-height: .74667rem;
              text-align: center;
              width: .82667rem;
              height: .74667rem;
              font-size: .42667rem;
              color: #fff;
              border-radius: .05333rem;
              background: #444
            .mins
              display: inline-block;
              line-height: .74667rem;
              text-align: center;
              width: .82667rem;
              height: .74667rem;
              font-size: .42667rem;
              color: #fff;
              border-radius: .05333rem;
              background: #444
            .secs
              display: inline-block;
              line-height: .74667rem;
              text-align: center;
              width: .82667rem;
              height: .74667rem;
              font-size: .42667rem;
              color: #fff;
              border-radius: .05333rem;
              background: #444
          .next-title
            margin-top: .53333rem;
            color: #333;
            font-size: .32rem;
            line-height: .32rem;
            height: .32rem*/
      .limitTime
          .limitTime-warp
            padding: .4rem .53333rem .4rem .74667rem;
            margin-bottom: .26667rem;
            height: 5.06667rem;
            background: #fff;
            display: -moz-flex;
            display: flex;
            >.left-item
              flex 1
              display flex
              flex-direction: column;
              padding-top: 1.06667rem;
              >.title
                font-size: .48rem;
                line-height: .48rem;
                margin-bottom: .32rem;
                color: #333;
                letter-spacing: .16rem;
              >.countdown
                display inline
                overflow hidden
                >span
                  float left
                  vertical-align middle
                  line-height: .74667rem;
                  display: inline-block;
                  text-align: center;
                >.time
                  width: .82667rem;
                  height: .74667rem;
                  font-size: .42667rem;
                  color: #fff;
                  border-radius: .05333rem;
                  background: #444;
                >.colon
                  color: #333;
                  font-size: .4rem;
                  width: .26667rem;
                  font-weight: 700;
              >.next-title
                margin-top: .53333rem;
                color: #333;
                font-size: .32rem;
                line-height: .32rem;
                height: .32rem;
            >.right-item
              background: #fff;
              width: 4.26667rem;
              height: 4.26667rem;
              position: relative;
              >.imgWarp
                width 100%
                >img
                  width: 100%;
                  height: 100%;

              >.price
                height: 1.28rem;
                width: 1.28rem;
                position: absolute;
                right: .26667rem;
                bottom: .48rem;
                background-color: rgba(244,143,24,.95);
                border-radius: 100%;
                color: #fff;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                >div
                  font-size: .37333rem;
                  line-height: .37333rem;
                  height: .37333rem;
                  >.rmb
                    font-size .32rem
                    margin-right (-5/$rem)

      .m-sale
        width: 10rem;
        height: 4rem;
        margin-bottom: .26667rem
        a
          background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg)
          background-position: center;
          background-repeat: no-repeat
          width: 100%;
          height: 100%;
          display: block
      .homeLast
        margin-bottom: .26667rem;
        background-color: #fff
        .lastHd
          display: flex
          flex-flow: row nowrap
          align-items: center
          justify-content: center;
          height: 1.46667rem;
          font-size: .42667rem
          a
            display: flex
            flex-flow: row nowrap
            color: #333
            .lastIcon
              margin-left: .13333rem
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .4rem;
              height: .4rem
        /*.lastImg
          width 100%
          box-sizing border-box
          height (453/$rem)
          padding: 0 .4rem .48rem;
          overflow: hidden
          .lastInner
            width 100%
            height 100%
            display flex
            .imgList
              height: 417px
              width: 7.66667rem
              display flex
              flex 1
              flex-shrink 0
              .imgItem
                width: 7.66667rem
                flex-flow nowrap
                flex-direction column
                margin-right: 20.8333px
                .imgWarp
                  display: block;
                  width: 7.66667rem
                  height: 4.29333rem
                  margin-bottom: .21333rem;
                  border-radius: 8px;
                  overflow: hidden
                  img
                    display block
                    width: 100%
                    left 50%
                .line1
                  height: .54667rem;
                  margin-bottom: .02667rem;
                  zoom: 1
                  :after
                    display: block;
                    clear: both;
                    visibility: hidden;
                    height: 0;
                    overflow: hidden;
                    content: "."
                  .title
                    white-space: nowrap;
                    overflow: hidden
                    text-overflow: ellipsis;
                    width: 5.46667rem;
                    float: left;
                    font-size: .37333rem
                  span
                    float: right;
                    font-size: .37333rem;
                    color: #b4282d;

                .desc
                  white-space: nowrap;
                  overflow: hidden
                  text-overflow: ellipsis;
                  width: 7.66667rem;
                  font-size: .32rem;
                  color: #7F7F7F
*/
        .lastImg
          width 100%
          height (453/$rem)
          box-sizing border-box
          padding: 0 .4rem .48rem;
          overflow: hidden
          >.lastInner
            width 100%
            height 100%
            display flex
            >.imgList
              display flex
              flex 1
              flex-shrink: 0
              >.imgItem
                display flex
                flex-flow: row nowrap
                flex-direction column
                margin-right: (20.8444/$rem)
                >.imgWrap
                  display: block;
                  width: 7.66667rem;
                  margin-bottom: .21333rem;
                  border-radius: (8/$rem)
                  overflow: hidden
                  >img
                    display block
                    width 100%
                    height 100%
                >.line1
                  height: .54667rem;
                  margin-bottom: .02667rem;
                  zoom: 1;
                  >h4
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 5.46667rem;
                    float: left;
                    font-size: .37333rem
                  >span
                    float: right;
                    font-size: .37333rem;
                    color: #b4282d;
                >.desc
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 7.66667rem;
                  font-size: .32rem;
                  color: #7F7F7F;




      .downLoad-copyright
        border-top: (1/$rem) solid rgba(0,0,0,.15);
        background-color: #414141
        margin-bottom .37333rem
        >div
          text-align: center;
          padding: .72rem .26667rem .37333rem
          width: 10rem;
          margin-right: auto;
          margin-left: auto;
          box-sizing border-box
          >.downLoad
            width 90%
            margin-right: auto;
            margin-left: auto;
            display flex
            align-items center
            justify-content center
            >a
              width: 2.29333rem;
              font-size: .32rem;
              color: #fff;
              margin-right: .33333rem
              margin-left: .33333rem
              height: .82667rem;
              line-height: .82667rem
              border: (1/$rem) solid #999
              text-align: center;
              background-color: transparent;
              border-radius: (4/$rem)
              overflow: hidden;

          >.copyright
            box-sizing: border-box
            margin-top: .48rem;
            margin-bottom: .48rem;
            display flex
            flex-direction column
            align-items center
            justify-content center
            >span
              font-size: .32rem;
              line-height: .42667rem;
              color: #999;



     /* .newsWarp
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        .mask
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.5);
        .close-button
          position: fixed;
          right: .4rem;
          top: .8rem;
          z-index: 2;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .85333rem;
          height: .85333rem;
        .detail-wapr
          transform: translate(-50%,-50%);
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          .content
            width: 8.4rem;
            height: 9.22667rem;
            background-color: #fff;
            border-radius: .21333rem;
            padding: .4rem .32rem;
            .xinren
              font-size: .53333rem;
              text-align: center;
              .title
                display: inline-block;
                position: relative;
                font-weight: 700;
                &::before,&::after
                  width: .53333rem;
                  height: .05333rem;
                  background-color: #333;
                  position: absolute;
                  top: .37333rem;
                  content: '';
                &::before
                  left: -.74667rem;
                &::after
                  left: 2.88rem;

            .subTitle
              margin-top: .9rem;
              font-size: .32rem;
              text-align: center;
            .newItem
              margin-top: .66667rem;
              background-color: #f4f4f4;
              border-radius: .05333rem;
              height: 3.09333rem;
              width: 100%;
              display: flex;
              .imgWarp
                img
                  width: 3.09333rem;
                  height: 3.09333rem;
              .text
                margin-left: .10667rem;
                flex: 1;
                padding: .57333rem 0;
                .name
                  font-size: .37333rem;
                  width: 3.73333rem;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                .manu
                  margin-top: .2rem;
                  span
                    border: (1/$rem) solid #7f7f7f;
                    border-radius: .05333rem;
                    padding: 0 .10667rem;
                    height: .48rem;
                    line-height: .48rem;
                    font-size: (24/$rem)
                .price
                  margin-top: .26667rem;
                  font-size: .37333rem;
                  .nowPrice
                    color: #b4282d
                  .originPrice
                    color: #999;
                    display: inline-block;
                    margin-left: .10667rem;
                    text-decoration: line-through;



            .actCouponBtn
              height: 1.17333rem;
              background-color: #b4282d;
              color: #fff;
              font-size: .37333rem;
              margin-top: .53333rem;
              border-radius: .05333rem;
              text-align: center;
              line-height: 1.17333rem;
            .checkMore
              height: 1.17333rem;
              border: (1/$rem) solid #7F7F7F;
              border-radius: .05333rem;
              text-align: center;
              line-height: 1.17333rem;
              font-size: .37333rem;
              margin-top: .32rem;
              display: block;
              color: #333;*/
      .goToTop
        display: inline
        position: fixed;
        right: .30667rem;
        bottom: 1.6rem;
        vertical-align: middle;
        width: 1.09333rem;
        height: 1.09333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
        background-size: 1.09333rem 1.09333rem;
        z-index: 2
</style>
