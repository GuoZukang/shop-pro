<template>
  <view class="hot">
    <view class="top-box">
      <img
        :src="preferenceObj?.bannerPicture"
        alt=""
        style="width: 100%; height: 124px; border-radius: 0 0 40rpx 40rpx"
      />
      <view class="tab">
        <view
          :class="{ tabs: indexs == index }"
          v-for="(item, index) in preferenceObj?.subTypes"
          :key="index"
          @click="tab(index)"
          >{{ item.title }}</view
        >
      </view>
    </view>
    <view v-if="preferenceObj?.lenght != 0">
      <view class="list" v-for="(item, index) in preferenceObj?.subTypes" :key="index">
        <view
          class="item"
          v-for="(ite, inde) in preferenceObj?.subTypes[indexs].goodsItems.items"
          :key="inde"
        >
          <view style="height: 460rpx">
            <img class="img" :src="ite.picture" alt="" />
            <view>{{ ite.name }}</view>
          </view>
          <view style="text-align: left; color: #cf4444">￥{{ ite.price }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { preferenceApi, inVogueApi, oneStopApi, newsApi } from '../../api/hots'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Result } from '../types/hotTypes'
const query = ref({
  subType: '',
  page: 1,
  pageSize: 10,
})
const preferenceObj = ref<Result>()
const indexs = ref(0)

const tab = (index: any) => {
  indexs.value = index
}
onLoad((options) => {
  if (options?.id == 1) {
    preferenceApi(query.value).then((res: any) => {
      preferenceObj.value = res.result
    })
  } else if (options?.id == 2) {
    inVogueApi(query.value).then((res: any) => {
      preferenceObj.value = res.result
    })
  } else if (options?.id == 3) {
    oneStopApi(query.value).then((res: any) => {
      preferenceObj.value = res.result
    })
  } else {
    newsApi(query.value).then((res: any) => {
      preferenceObj.value = res.result
    })
  }
})
</script>

<style lang="scss" scoped>
.hot {
  width: 100vw;
  height: 100%;
  background-color: #f4f4f4;
  padding-top: 330rpx;
}
.tab {
  width: 90%;
  height: 110rpx;
  background-color: #fff;
  line-height: 110rpx;
  display: flex;
  justify-content: space-around;
  border-radius: 20rpx;
  position: fixed;
  top: 200rpx;
  left: 30rpx;
}
.top-box {
  width: 100%;
  position: fixed;
  top: 0;
}
.list {
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.item {
  width: 40%;
  padding: 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 20rpx;
}
.img {
  width: 95%;
  height: 300rpx;
}
.tabs {
  border-bottom: 6rpx solid #27ba9b;
  box-sizing: border-box;
}
</style>
