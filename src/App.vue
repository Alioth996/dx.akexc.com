<template>
  <main id="dx-conatiner" flex="~ col none" h-full justify-center items-center>
    <!-- 头部logo -->
    <DxHeader />

    <!-- 公告 -->
    <DxNotice />

    <!-- 演奏区域 -->
    <DxPlay />

    <!-- 底部项目信息 -->
    <DxFooter />

  </main>
</template>

<script setup>
import DxHeader from './components/dx-header.vue';
import DxFooter from './components/dx-footer.vue';
import DxPlay from './components/dx-play.vue';
import DxNotice from './components/dx-notice.vue';
</script>
