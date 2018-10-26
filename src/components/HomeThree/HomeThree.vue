<template>
  <div class="homeThree">
    <header class="threeHd" :class="className">
      <a :class="{haowu:className!=='newItemList'}" href="javascript:;">
        <span v-if="className==='newItemList'">新品首发</span>
        <span v-else="">人气推荐·好物精选</span>
        <div class="all">
            <span class="wra">
              <span>查看全部</span>
              <i class="arrow-right"></i>
            </span>
        </div>
      </a>
    </header>

    <div class="grid" ref="gird">
      <div class="threeContainer">
        <ul class="threeList">
          <li class="threeItem" v-for="(item,index) in Items" :key="index">
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
          <li class="threeItem">
            <a class="item-more" href="javascript:;">
              <span class="text">查看全部</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>

  import BScroll from 'better-scroll'
  export default {
   props:{
     className:String,
     Items:Array
   },
    mounted(){
      if (!this.Items){
        return
      }

      this.$nextTick(() => {
        new BScroll(this.$refs.gird,{
          click: true,
          scrollX:true,
          scrollY:false
        });
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .homeThree
      margin-bottom: (.26667*75/$rem)
      background-color: #fff;
      .threeHd
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
        &.newItemList
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
        &.popularItemList
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
        a
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
          &.haowu
            color: #B4A078;
            .all
              background-color  #F4E9CB
      .grid
        height: (6.4*75/$rem)
        background-color: #fff;
        display flex
        width 100%
        overflow hidden
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
                  font-family: PingFangSC-Regular
              .item-more
                display: block;
                border: .10667rem solid #F4F4F4;
                width: 3.73333rem;
                height: 3.73333rem;
                margin: 0 .4rem;
                line-height: 3.73333rem;
                text-align: center;
                .text
                  font-size: .37333rem;
                  color: #666
</style>
