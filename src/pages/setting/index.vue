<template>
  <view class="setting">
    <view class="list" v-if="store.token != ''" @click="goaddress">
      <view>我的收货地址</view>
      <view
        ><img src="../../static/images/右箭头.png" alt="" style="width: 40rpx; height: 40rpx"
      /></view>
    </view>
    <view class="list">
      <view>关于小兔鲜儿</view>
      <view
        ><img src="../../static/images/右箭头.png" alt="" style="width: 40rpx; height: 40rpx"
      /></view>
    </view>
    <button v-if="store.token != ''" class="btn" @click="quit">退出登录</button>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
const store = useUserStore()

const quit = () => {
  uni.showModal({
    title: '',
    content: '是否退出登录？',
    success: function (res) {
      if (res.confirm) {
        store.token = ''
        uni.navigateTo({ url: '/pages/login/index' })
      } else if (res.cancel) {
        // cancel
      }
    },
  })
}
const goaddress = () => {
  uni.navigateTo({
    url: '/pages/address/index',
  })
}
</script>

<style lang="scss" scoped>
.setting {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  overflow: hidden;
  .list {
    width: 90%;
    margin: auto;
    background-color: #fff;
    margin-top: 20rpx;
    padding: 30rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
    display: flex;
    justify-content: space-between;
  }
}
.btn {
  width: 90%;
  margin: auto;
  background-color: #fff;
  margin-top: 20rpx;
}
</style>
