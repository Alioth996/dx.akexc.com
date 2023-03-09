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

    <!-- 提示用户横屏设备 -->
    <m-dialog @close="closeDialog" :visible="visible">
      <span>手机/设备横向显示效果更佳哦~</span>
    </m-dialog>

  </main>
</template>

<script setup>
import DxHeader from './components/dx-header.vue';
import DxFooter from './components/dx-footer.vue';
import DxPlay from './components/dx-play.vue';
import DxNotice from './components/dx-notice.vue';

import { useDialog } from "shuimo-ui";

const { visible, showDialog, closeDialog } = useDialog();


/**
 * orientation 是 Screen 接口的一个只读属性，返回屏幕当前的方向。
 * @api https://developer.mozilla.org/zh-CN/docs/Web/API/Screen/orientation
 */
let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

if (orientation === "landscape-primary") {
  console.log(`${orientation}:大屏横屏`);
} else if (orientation === "landscape-secondary") {
  console.log(`${orientation}:中屏横屏`);
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log(`${orientation}:正常竖屏`);
  showDialog()
} else if (orientation === undefined) {
  console.log("设备不支持该api");
}


</script>
