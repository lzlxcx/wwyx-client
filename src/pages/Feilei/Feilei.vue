<template>
  <section class="feiLei">
    <div class="header">
      <div class="hd">
        <div class="hdContent">
          <div class="hdIn">
            <i class="icon"></i>
            <span class="hdText">搜索商品, 共16933款好物</span>
          </div>
        </div>
      </div>
    </div>

   <!-- <div class="feiLeiNav">
      <div class="navContent">
        <ul class="navList">
          <li class="item">
            <a class="txt" href="javascript:;">推荐专区</a>
          </li>
          <li class="item">
            <a class="txt" href="javascript:;">推荐专区</a>
          </li>
          <li class="item">
            <a class="txt" href="javascript:;">推荐专区</a>
          </li>
          <li class="item">
            <a class="txt" href="javascript:;">推荐专区</a>
          </li>
          <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
          </li>
          <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
          </li>
        </ul>
      </div>
    </div>-->
   <div class="feiLeiContent">
     <div class="navContainer">
       <div class="navScroll" ref="nav">
         <ul class="navList">
           <li v-if="category_data.length" :class="{active:isActive  === index}"  @click="isNow(index,category)"
               v-for="(category,index) in category_data" :key="index">
             <a class="txt" href="javascript:;">{{category.name}}</a>
           </li>
         </ul>
       </div>
     </div>

     <div class="right"  ref="rightNav">
       <div class="imgRight">
         <div class="banner" :style="{backgroundImage: `url(${showcategory.bannerUrl})`}">
           <div class="cnt"></div>
         </div>
         <div class="cateList" v-if="category_data.length">
           <SpecialItem v-if="!showcategory.level" :showcategory = 'showcategory'/>
           <CategoryItem v-else :showcategory = 'showcategory'/>
         </div>
       </div>
     </div>
   </div>


  </section>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import SpecialItem from '../../components/FeiLei/SpeciakItem/SpecialItem.vue'
  import CategoryItem from '../../components/FeiLei/CategoryItem/CateGoryItem.vue'
  export default {
    data() {
      return {
        isActive:'0',
        showcategory:{}
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryData',() => {
        this.$nextTick(() => {
          this._initScroll()
          this.showcategory = this.category_data[0]
        })

      })
    },
    methods:{
      _initScroll(){
        new BScroll(this.$refs.nav,{
          click: true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
          scrollbar:true
        })
        new BScroll(this.$refs.rightNav,{
          click:true,
        })
      },
      isNow(index,category) {
        this.isActive = index
        this.showcategory = category;
      }
    },
    computed:{
      ...mapState(['category_data'])
    },
    components:{
      SpecialItem,
      CategoryItem
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  html,body
    overflow hidden
  .feiLei
    width 100%
    height 100%
    .header
      height 88px
      .hd
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%
        .hdContent
          display flex
          align-items: center;
          height: 1.17333rem;
          padding: 0 .4rem;
          background-color: #fff;
          position: relative
          :after
            content: '';
            position: absolute;
            background-color: #d9d9d9;
            width: 100%;
            height: 1px;
            bottom 0
          .hdIn
            width: 100%
            display flex
            flex-flow: row nowrap
            align-items: center
            justify-content: center;
            height: .74667rem;
            font-size: .37333rem;
            background-color: #ededed;
            border-radius: .10667rem;
            .icon
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem;
              margin-right: .13333rem
            .hdText
              color: #666
              font-size: .37333rem
   /* .feiLeiNav
      left 0
      top: 1.17333rem
      position: fixed
      bottom: 0
      z-index: 4;
      width: 2.16rem;
      box-sizing border-box
      background-color: #fff
      &::after
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,.15);
        top: 0;
        bottom: 0;
        width: 1px;
        transform-origin: 100% 50% 0;
        right: 0
        .navContent
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden
          .navList
            .item
              position relative
              width: 100%;
              height: .66667rem;
              text-align: center;
              border: none
              .txt
                display: block;
                color: #333;
                font-size: .37333rem;
                line-height: .66667rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden
*/
    .feiLeiContent
      height 100%
      background-color #fff
      .navContainer
        position: absolute;
        top: 1.17333rem;
        left: 0;
        bottom: 0;
        z-index:4
        width: 2.16rem;
        background-color: #fff
        &::after
          content: '';
          position: absolute;
          background-color: rgba(0,0,0,.15);
          top: 0;
          bottom: 0;
          width: 1px;
          -webkit-transform-origin: 100% 50% 0;
          transform-origin: 100% 50% 0;
          right: 0
        >.navScroll
          width 100%
          height 100%
          overflow hidden
          position: relative
          ul
            li
              position relative
              width: 100%;
              height: .866667rem;
              text-align: center;
              border: none
              margin-top: .53333rem
              >.txt
                display: block;
                color: #333;
                font-size: .37333rem;
                line-height: .66667rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              &.active
                &::before
                  content: ' ';
                  position: absolute;
                  top: 0;
                  left: 0;
                  height 100%
                  width: .08rem;
                  background-color: #ab2b2b
                >.txt
                  color: #ab2b2b

      .right
        height 1148px
        margin-left: 2.16rem;
        padding: .4rem .4rem .28rem
        .imgRight
          .banner
            position: relative;
            width: 100%;
            height: 2.56rem;
            display: table;
            margin-bottom: .42667rem;
            background: center no-repeat #f4f4f4;
            background-size: cover;
            border-radius: 4px
            .cnt
              display: table-cell;
              vertical-align: middle;
              text-align: center;
              font-size: .37333rem;
              color: #fff

</style>
