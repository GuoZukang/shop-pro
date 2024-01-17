<template>
  <view>
    <img :src="item.icon" alt="" style="width: 100rpx; height: 100rpx" />
    <view style="color: #666; font-size: 30rpx">{{ item.name }}</view>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  item: any
}>()
</script>

<style scoped></style>
