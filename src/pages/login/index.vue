<template>
  <view class="login">
    <img class="img" src="../../static/images/logo_icon.png" alt="" />
    <input type="text" placeholder="请输入用户名/手机号" v-model="query.account" />
    <input type="text" placeholder="请输入密码" v-model="query.password" />
    <button class="btn" @click="enter">登录</button>
    <view class="rests" style="color: #999">————其他登录方式————</view>
    <view class="btm">
      <view class="phone">
        <img class="imgs" src="../../static/images/phone.png" alt="" />
      </view>
      <view style="text-align: center; margin-top: 20rpx">模拟快捷登录</view>
    </view>
    <view style="text-align: center; margin-top: 20rpx; font-size: 24rpx; color: #999"
      >登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view
    >
  </view>
</template>

<script lang="ts" setup>
import { loginApi } from '../../api/login'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
const query = ref({
  account: '13123456789',
  password: '123456',
})
const store = useUserStore()

const enter = () => {
  loginApi(query.value).then((res: any) => {
    console.log(res)
    store.token = res.result.token
    uni.navigateBack()
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  padding: 40rpx;
  box-sizing: border-box;
}
.img {
  width: 240rpx;
  height: 240rpx;
  display: block;
  margin: 100rpx auto 40rpx auto;
}
input {
  width: 95%;
  border: 2rpx solid #ccc;
  margin-bottom: 20rpx;
  padding: 20rpx;
  border-radius: 40rpx;
  font-size: 24rpx;
}
.btn {
  width: 100%;
  background-color: #28bb9c;
  color: #fff;
  border-radius: 92px;
}
.rests {
  width: 100%;
  text-align: center;
  margin-top: 60rpx;
}
.btm {
  margin-top: 60rpx;
}
.phone {
  width: 100rpx;
  height: 100rpx;
  border: 2rpx solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  .imgs {
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
