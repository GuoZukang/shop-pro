<template>
  <view class="home">
    <view class="top" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <CustomNavbar></CustomNavbar>
    </view>
    <scroll-view
      style="overflow: hidden; height: calc(100vh - 135px)"
      scroll-y
      refresher-enabled
      :refresher-triggered="flag"
      @refresherrefresh="pull"
      @scrolltolower="down"
    >
      <u-swipe :bannerArr="bannerArr"></u-swipe>
      <view class="mutli">
        <CategoryPanel
          class="item"
          v-for="(item, index) in mutliArr"
          :key="index"
          :item="item"
        ></CategoryPanel>
      </view>
      <view class="hot">
        <HotPanel class="item" v-for="(item, index) in hotArr" :key="index" :item="item"></HotPanel>
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
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { ref } from 'vue'
const { safeAreaInsets } = uni.getSystemInfoSync()
const flag = ref(false)

// 轮播图
import { bannerApi } from '@/api/banner'
import type { bannerTypes } from '../types/bannerTypes'
const bannerArr = ref<bannerTypes[]>([])
const getbanner = () => {
  bannerApi({ distributionSite: 2 }).then((res: any) => {
    bannerArr.value = res.result
  })
}
getbanner()

// 前台分类
import { mutliApi } from '@/api/mutli'
import type { mutliTypes } from '../types/mutliTypes'
const mutliArr = ref<mutliTypes[]>([])
const getmutli = () => {
  mutliApi().then((res: any) => {
    mutliArr.value = res.result
  })
}
getmutli()

// 热门推荐
import { hotApi } from '@/api/hot-mutli'
import type { hotTypes } from '../types/hot-mutliTypes'
const hotArr = ref<hotTypes[]>([])
const gethot = () => {
  hotApi().then((res: any) => {
    hotArr.value = res.result
  })
}
gethot()

// 猜你喜欢
import { guessLikeApi } from '../../api/guessLike'
import type { guessLikeTypes } from '../types/guessLikeTypes'
const guessLikeArr = ref<guessLikeTypes[]>([])
const query = ref({
  page: 1,
  pageSize: 10,
})
const total = ref()
const getguessLike = () => {
  guessLikeApi(query.value).then((res: any) => {
    guessLikeArr.value = [...guessLikeArr.value, ...res.result.items]
    total.value = res.result.counts
  })
}
getguessLike()
// 下拉刷新
const pull = () => {
  flag.value = true
  query.value.page = 1
  query.value.pageSize = 10
  guessLikeArr.value = []
  getbanner()
  getmutli()
  gethot()
  getguessLike()
  setTimeout(() => {
    flag.value = false
  }, 2000)
}
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
.home {
  width: 100vw;
  height: calc(100% - 100rpx);
  background-color: #f7f7f7;
}
.top {
  background-color: #00bf9c;
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
.mutli {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    width: 20%;
    text-align: center;
    margin-top: 30rpx;
  }
}
.hot {
  width: 95%;
  background-color: #fff;
  border-radius: 20rpx;
  padding: 20rpx;
  margin: 40rpx auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    width: 50%;
  }
}
</style>
