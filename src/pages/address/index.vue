<template>
  <view class="address">
    <view class="list">
      <view class="item" v-for="(item, index) in info" :key="index">
        <view style="display: flex; justify-content: space-between">
          <view style="display: flex"
            >{{ item.receiver }}&ensp;{{ item.contact }}
            <view class="default" v-if="item.isDefault == 1">默认</view>
          </view>
          <view @click="goamend">| 修改</view>
        </view>
        <view style="margin-top: 20rpx">{{ item.fullLocation }}&ensp;{{ item.address }}</view>
      </view>
    </view>
    <view class="btn" @click="goaddressAdd">新建地址</view>
  </view>
</template>

<script lang="ts" setup>
import { addressApi } from '../../api/address'
import type { addressTypes } from '../types/addressTypes'
import { ref } from 'vue'
const info = ref<addressTypes[]>([])

const getaddress = () => {
  addressApi().then((res: any) => {
    info.value = res.result
  })
}
getaddress()
const goaddressAdd = () => {
  uni.navigateTo({
    url: '/pages/addressAdd/index',
  })
}
const goamend = () => {
  uni.navigateTo({
    url: '/pages/amend/index',
  })
}
</script>

<style lang="scss" scoped>
.address {
  width: 100vw;
  height: calc(100vh - 120px);
  background-color: #f4f4f4;
  overflow: hidden;
  overflow-y: scroll;
}
.list {
  width: 95%;
  background-color: #fff;
  padding: 0 40rpx;
  box-sizing: border-box;
  margin: 30rpx auto;
  border-radius: 20rpx;
  .item {
    padding: 40rpx 0;
    box-sizing: border-box;
    border-bottom: 2rpx solid #ccc;
  }
}
.default {
  width: 80rpx;
  text-align: center;
  border: 2rpx solid #27ba9b;
  color: #27ba9b;
  margin-left: 10rpx;
  border-radius: 10rpx;
}
.btn {
  width: 95%;
  height: 90rpx;
  background-color: #27ba9b;
  text-align: center;
  line-height: 90rpx;
  color: #fff;
  border-radius: 45rpx;
  position: fixed;
  bottom: 40rpx;
  left: 20rpx;
}
</style>
