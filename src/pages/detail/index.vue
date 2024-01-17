<template>
  <view class="detail">
    <swiper
      style="width: 100%; height: 400px"
      :circular="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      :indicator-dots="true"
      indicator-active-color="#fff"
    >
      <swiper-item v-for="(item, index) in info?.mainPictures" :key="index">
        <img :src="item" alt="" style="width: 100%; height: 100%" />
        {{ item }}
      </swiper-item>
    </swiper>
    <view class="price"
      ><span>￥</span><span style="font-size: 60rpx">{{ info?.price }}</span></view
    >
    <view style="background-color: #fff">
      <view class="name">{{ info?.name }}</view>
      <view class="desc">{{ info?.desc }}app</view>
      <view class="box" style="margin-top: 40rpx">
        <view>
          <span style="color: #898b94">选择</span>
          <span style="margin-left: 20rpx">请选择商品规格</span>
        </view>
        <view
          ><img src="../../static/images/右箭头.png" alt="" style="width: 30rpx; height: 30rpx"
        /></view>
      </view>
      <view class="box">
        <view>
          <span style="color: #898b94">送至</span>
          <span style="margin-left: 20rpx">请选择收货地址</span>
        </view>
        <view
          ><img src="../../static/images/右箭头.png" alt="" style="width: 30rpx; height: 30rpx"
        /></view>
      </view>
      <view class="box">
        <view>
          <span style="color: #898b94">服务</span>
          <span style="margin-left: 20rpx">无忧退 快速退款 免费包邮</span>
        </view>
        <view
          ><img src="../../static/images/右箭头.png" alt="" style="width: 30rpx; height: 30rpx"
        /></view>
      </view>
    </view>
    <view style="background-color: #fff; margin-top: 20rpx; padding: 30rpx">
      <view class="xq">详情</view>
      <view class="detail-list" v-for="(item, index) in info?.details.properties" :key="index">
        <view style="width: 100px">{{ item.name }}</view>
        <view style="width: 420rpx; margin-left: 30rpx">{{ item.value }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { detailApi } from '../../api/detail'
import type { Result } from '../types/detailTypes'
import { ref } from 'vue'
const info = ref<Result>()

onLoad((options) => {
  detailApi({ id: options?.id }).then((res: any) => {
    info.value = res.result
  })
})
</script>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
}
.price {
  width: 100%;
  height: 140rpx;
  background-color: #35c8a9;
  line-height: 140rpx;
  color: #fff;
  padding-left: 20rpx;
  box-sizing: border-box;
}
.name {
  padding: 20rpx;
  box-sizing: border-box;
}
.desc {
  padding-left: 20rpx;
  color: #cf4444;
}
.box {
  padding: 40rpx 20rpx;
  display: flex;
  justify-content: space-between;
  border-top: 2rpx solid #ccc;
  box-sizing: border-box;
}
.xq {
  width: 100rpx;
  text-align: center;
  border-left: 6rpx solid #27ba9b;
  font-weight: 600;
  margin-bottom: 40rpx;
}
.detail-list {
  border-bottom: 2rpx dashed #ccc;
  padding: 20rpx;
  box-sizing: border-box;
  display: flex;
}
</style>
