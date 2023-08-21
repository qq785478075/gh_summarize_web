<script setup>
import { RouterView } from 'vue-router'
import baseHeader from '@/components/baseHeader.vue';
import baseFooter from '@/components/baseFooter.vue';
</script>

<template>
  <baseHeader></baseHeader>
  <main>
    <RouterView />
  </main>
  <baseFooter></baseFooter>
</template>

<style lang="scss" scoped>
main{
  min-height: calc(100vh - 260px);
}
::v-deep  .el-carousel__arrow {
  background-color: transparent !important;
  border: 6px solid #0055F2 !important;
  color: #0055F2;
  font-size: 30px;
  font-weight: 900;
  width: 60px;
  height: 60px;
}
@media screen and (max-width:768px){
  ::v-deep  .el-carousel__arrow {
    width: 30px;
    height: 30px;
    border: 2px solid #0055F2 !important;
    font-size: 16px;
  }
}
</style>
