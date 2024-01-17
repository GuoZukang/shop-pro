<template>
  <view class="my">
    <scroll-view
      style="overflow: hidden; height: calc(100vh - 50px)"
      scroll-y
      @scrolltolower="down"
    >
      <view class="bg">
        <view class="login" v-if="!store.token">
          <img class="img" src="../../static/images/header-img.png" alt="" @click="register" />
          <view @click="register">
            <view>未登录</view>
            <view style="margin-top: 20rpx; font-size: 24rpx">点击登录账号</view>
          </view>
        </view>
        <view class="login" v-else>
          <img class="img" :src="info?.avatar" alt="" />
          <view>
            <view>{{ info?.nickname }}</view>
            <view class="update">更新头像昵称</view>
          </view>
        </view>
        <view style="text-align: right" @click="gosetting">设置</view>
      </view>
      <view class="order">
        <view class="top">
          <view>我的订单</view>
          <view style="display: flex; align-items: center; color: #939393; font-size: 30rpx"
            >查看全部订单<img
              src="../../static/images/右箭头.png"
              alt=""
              style="width: 25rpx; height: 25rpx"
          /></view>
        </view>
        <view class="order-list">
          <view class="item">
            <img
              src="../../static/images/待付款-b.png"
              alt=""
              style="width: 60rpx; height: 60rpx"
            />
            <view>待付款</view>
          </view>
          <view class="item">
            <img
              src="../../static/images/待发货-b.png"
              alt=""
              style="width: 60rpx; height: 60rpx"
            />
            <view>待发货</view>
          </view>
          <view class="item">
            <img
              src="../../static/images/待收货-b.png"
              alt=""
              style="width: 60rpx; height: 60rpx"
            />
            <view>待收货</view>
          </view>
          <view class="item">
            <img
              src="../../static/images/待评价-b.png"
              alt=""
              style="width: 60rpx; height: 60rpx"
            />
            <view>待评价</view>
          </view>
        </view>
      </view>
      <view class="like">
        <img src="../../static/images/bubble.png" alt="" style="width: 30rpx; height: 30rpx" />
        <span>&ensp;猜你喜欢&ensp;</span>
        <img src="../../static/images/bubble.png" alt="" style="width: 30rpx; height: 30rpx" />
      </view>
      <view class="u-guessLike">
        <u-guessLike
          class="item"
          v-for="(item, index) in guessLikeArr"
          :key="index"
          :item="item"
        ></u-guessLike>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { profileApi } from '../../api/profile'
import type { profileTypes } from '../types/profileTypes'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
const store = useUserStore()
const info = ref<profileTypes>()

if (store.token != '') {
  profileApi().then((res: any) => {
    info.value = res.result
  })
}
const register = () => {
  uni.navigateTo({
    url: '/pages/login/index',
  })
}
const gosetting = () => {
  uni.navigateTo({
    url: '/pages/setting/index',
  })
}

import { guessLikeApi } from '../../api/guessLike'
import type { guessLikeTypes } from '../../pages/types/guessLikeTypes'
const guessLikeArr = ref<guessLikeTypes[]>([])
const query = ref({
  page: 1,
  pageSize: 10,
})
const total = ref()
const getguessLike = () => {
  guessLikeApi(query.value).then((res: any) => {
    guessLikeArr.value = [...guessLikeArr.value, ...res.result.items]
  })
}
getguessLike()
// 上拉加载
const down = () => {
  if (query.value.pageSize >= total.value) {
    uni.showToast({
      title: '到底了',
      icon: 'error',
    })
  } else {
    query.value.page++
    query.value.pageSize += 10
    getguessLike()
  }
}
</script>

<style lang="scss" scoped>
.my {
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  background-color: #f7f7f8;
  .bg {
    width: 100%;
    height: 420rpx;
    background-image: url('../../static/images/center_bg.png');
    background-size: 100%;
    padding: 40rpx;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    margin-bottom: 130rpx;
    .login {
      display: flex;
      align-items: center;
      .img {
        width: 132rpx;
        height: 132rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }
      .update {
        width: 160rpx;
        height: 50rpx;
        margin-top: 20rpx;
        font-size: 24rpx;
        border: 2rpx solid #ccc;
        border-radius: 25rpx;
        text-align: center;
        line-height: 50rpx;
      }
    }
  }
  .order {
    width: 95%;
    background-color: #fff;
    padding: 40rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
    position: absolute;
    top: 240rpx;
    left: 20rpx;
    .top {
      display: flex;
      justify-content: space-between;
    }
  }
}
.order-list {
  width: 100%;
  margin-top: 40rpx;
  display: flex;
  justify-content: space-between;
  .item {
    width: 20%;
    text-align: center;
  }
}
.like {
  text-align: center;
  margin-bottom: 40rpx;
}
.u-guessLike {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    width: 47%;
    background-color: #fff;
    padding: 20rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    border-radius: 20rpx;
    text-align: center;
  }
}
</style>
