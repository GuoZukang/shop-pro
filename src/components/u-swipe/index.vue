<template>
  <view class="u-swipe">
    <swiper
      :circular="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      :indicator-dots="true"
      indicator-active-color="#fff"
    >
      <swiper-item v-for="(item, index) in bannerArr" :key="index">
        <img :src="item.imgUrl" alt="" style="width: 100%" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  bannerArr: any[]
}>()
</script>

<style scoped></style>
