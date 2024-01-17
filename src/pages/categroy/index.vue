<template>
  <view class="categroy">
    <view class="search">搜索</view>
    <view class="cate">
      <view class="left">
        <view
          class="tab-item"
          :class="{ active: indexs == index }"
          v-for="(item, index) in cateArr"
          :key="index"
          @click="tab(index)"
          >{{ item.name }}</view
        >
      </view>
      <view class="right">
        <u-swipe :bannerArr="bannerArr"></u-swipe>
        <view v-for="(ite, inde) in cateArr[indexs]?.children" :key="inde">
          <view class="nav">
            <view>{{ ite.name }}</view>
            <view
              >全部<img
                src="../../static/images/右箭头.png"
                alt=""
                style="width: 30rpx; height: 30rpx"
            /></view>
          </view>
          <view class="list">
            <view class="item" v-for="(it, ind) in ite.goods" :key="ind">
              <view style="height: 280rpx">
                <img :src="it.picture" alt="" style="width: 90%; height: 82px" />
                <view class="name">{{ it.name }}</view>
              </view>
              <view style="color: #cf4444">￥{{ it.price }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { categroyApi } from '../../api/categroy'
import type { Result } from '../types/categroyTypes'
import { bannerApi } from '@/api/banner'
import type { bannerTypes } from '../../pages/types/bannerTypes'
import { ref } from 'vue'
const cateArr = ref<Result[]>([])
const indexs = ref(0)
const bannerArr = ref<bannerTypes[]>([])

bannerApi({ distributionSite: 2 }).then((res: any) => {
  bannerArr.value = res.result
})

categroyApi().then((res: any) => {
  cateArr.value = res.result
})
const tab = (index: number) => {
  indexs.value = index
}
</script>

<style lang="scss" scoped>
.categroy {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.search {
  width: 90%;
  height: 65rpx;
  color: #fff;
  line-height: 65rpx;
  padding-left: 40rpx;
  border-radius: 30rpx;
  background-color: #f3f4f4;
  color: #8b8b8b;
  font-size: 30rpx;
  margin: 20rpx auto;
}
.cate {
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 200rpx;
  height: 100vh;
  background-color: #f6f6f6;
}
.right {
  width: calc(100vw - 240rpx);
  height: calc(100vh - 150rpx);
  overflow-y: scroll;
  margin: 0 auto;
}
.tab-item {
  width: 100%;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  border-bottom: 1px solid #cccc;
  box-sizing: border-box;
}
.active {
  border-left: 8rpx solid #27ba9b;
  background-color: #fff;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
  box-sizing: border-box;
}
.list {
  .item {
    width: 30%;
    float: left;
    margin-left: 15rpx;
    margin-bottom: 40rpx;
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
