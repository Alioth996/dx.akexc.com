<template>
    <div id="dx-play" mt-10>
        <DxPanelTop />
        <DxPanel />
    </div>
</template>

<script setup>
import DxPanelTop from './dx-panel/dx-panel-top.vue';
import DxPanel from './dx-panel/dx-panel.vue';</script>

<style scoped>
#dx-play {
    flex: 1;
    width: 70ch;
}
</style>