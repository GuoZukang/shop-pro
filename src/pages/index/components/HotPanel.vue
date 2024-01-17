<template>
  <view>
    <view style="margin-bottom: 20rpx" @click="gohot(item)"
      ><span>{{ item.title }}</span></view
    >
    <view class="img" @click="gohot(item)">
      <img
        v-for="(ite, inde) in item.pictures"
        :key="inde"
        :src="ite"
        alt=""
        style="width: 150rpx; height: 150rpx"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  item: any
}>()
const gohot = (item: any) => {
  if (item.title == '特惠推荐') {
    uni.navigateTo({
      url: '/pages/hot/index?id=' + 1,
    })
  } else if (item.title == '爆款推荐') {
    uni.navigateTo({
      url: '/pages/hot/index?id=' + 2,
    })
  } else if (item.title == '一站买全') {
    uni.navigateTo({
      url: '/pages/hot/index?id=' + 3,
    })
  } else {
    uni.navigateTo({
      url: '/pages/hot/index?id=' + 4,
    })
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
