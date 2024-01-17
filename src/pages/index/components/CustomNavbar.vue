<template>
  <view class="header">
    <view class="title"
      ><img
        src="../../../static/images/logo.png"
        alt=""
        style="width: 150rpx; height: 40rpx"
      />&ensp;|&ensp;新鲜&nbsp;·&nbsp;亲民&nbsp;·&nbsp;快捷</view
    >
    <view class="search">搜索商品</view>
  </view>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
  width: 100vw;
  height: 170rpx;
  padding: 20rpx;
  background-image: url('../../../static/images/navigator_bg.png');
  background-size: 100%;
  box-sizing: border-box;
}
.title {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 35rpx;
}
.search {
  width: 90%;
  height: 65rpx;
  color: #fff;
  line-height: 65rpx;
  padding-left: 40rpx;
  border-radius: 30rpx;
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 25rpx;
  font-size: 30rpx;
}
</style>
