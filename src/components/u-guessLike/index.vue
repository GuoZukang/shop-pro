<template>
  <view @click="godetail(item.id)">
    <view style="height: 500rpx">
      <img class="img" :src="item.picture" alt="" />
      <view style="text-align: left">{{ item.name }}</view>
    </view>
    <view style="color: #cf4444; text-align: left">￥{{ item.price }}</view>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  item: any
}>()
const godetail = (id: string) => {
  uni.navigateTo({
    url: '/pages/detail/index?id=' + id,
  })
}
</script>

<style scoped>
.img {
  width: 90%;
  height: 334rpx;
}
</style>
