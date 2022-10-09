<template>
  <main id="dx-conatiner" flex="~ col none" h-full justify-center items-center>
    <!-- 头部logo -->
    <DxHeader />
    <!-- 头部logo -->

    <!-- 演奏区域 -->
    <DxPlay />
    <!-- 演奏区域 -->

    <!-- 底部版权备案号 -->
    <DxFooter />
    <!-- 底部版权备案号 -->

  </main>
</template>

<script setup>
import DxHeader from './components/dx-header.vue';
import DxFooter from './components/dx-footer.vue';
import DxPlay from './components/dx-play.vue';


</script>

<style scoped>

</style>