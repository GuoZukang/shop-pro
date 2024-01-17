<template>
  <div class="add-address">
    <input type="text" placeholder="请输入收货人姓名" v-model="query.receiver" />
    <input type="text" placeholder="请输入收货人手机号" v-model="query.contact" />
    <input type="text" placeholder="请选择地址" v-model="query.provinceCode" />
    <input type="text" placeholder="街道、楼牌号等信息" v-model="query.address" />
    <switch color="#007aff" :checked="query.isDefault == 0 ? false : true" @change="flag"
      >设为默认地址</switch
    >
    <button @click="add">保存并使用</button>
  </div>
</template>

<script lang="ts" setup>
import { addressAddApi } from '../../api/addressAdd'
import { ref } from 'vue'
const query = ref({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '1',
  countyCode: '1',
  address: '',
  isDefault: 0,
})

const flag = () => {
  if (query.value.isDefault == 0) {
    query.value.isDefault = 1
  } else {
    query.value.isDefault = 0
  }
}
const add = () => {
  addressAddApi(query.value).then()
  uni.navigateTo({
    url: '/pages/address/index',
  })
}
</script>

<style lang="scss" scoped></style>
