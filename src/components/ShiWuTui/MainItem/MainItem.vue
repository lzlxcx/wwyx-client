<template>

      <a class="mainItem" href="javascript:;" v-if="mainData">
        <div class="imgContent" :style="{backgroundImage:`url(${mainData.picUrl})`}">
          <div class="tag">{{mainData.typeName}}</div>
        </div>
        <div class="imgInfo">
          <div class="line1">
            <div class="title">{{mainData.title}}</div>
            <div class="price">
              <span class="num">{{mainData.priceInfo}}</span>
              <span class="unit">元起</span>
            </div>
          </div>
          <div class="line2">
            <div class="subTitle">{{mainData.subTitle}}</div>
          </div>
        </div>
      </a>




</template>

<script>
  export default {
    props:{
      mainData:Object,
      minorData:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"


      .mainItem
        display: block;
        position: relative;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: .10667rem;
        overflow: hidden
        .imgContent
          background-image: url(//yanxuan.nosdn.127.net/ebddd90057e76f11633cc124d468a436.jpg?imageView&quality=75)
          background-size: cover;
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
            font-size (24/$rem)
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
              overflow: hidden

</style>
