<template>
    <div id="dx-panel " flex="~ row " justify-start>
        <div v-for="dxTone in dxToneList" :key="dxTone.keyCode" :data-keyCode="dxTone.keyCode" :data-name="dxTone.name"
            class="dxTone-key" @click.stop="clickControlDX(dxTone)" ref="toneBtn">
            <div class="keytip">
                <div class="keyname">{{dxTone.key}}</div>
                <div class="notename">{{dxTone.name}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import dxToneList from '@/config/dxTone'
import { computed, onMounted, ref } from 'vue';

const dxPanelRef = ref()


const clickControlDX = ({ url }) => {

    const dxToneBtnList = document.querySelector('#dx-panel')

    console.log(dxToneBtnList);
    // 目前来说构造函数时最优解,后期可能会使用 tone.js
    const dxAudio = new Audio(url)
    dxAudio.addEventListener("canplaythrough", event => {
        /* 音频可以播放；如果权限允许则播放 */
        dxAudio.volume = 0.3
        dxAudio.play();
    });

}

const keypressControlDX = () => {
    // keypress 按住不放会一直触发事件, keyup需要松开键盘才触发. 
    // 2. 可能考虑使用键盘驱动点击事件模拟效果
    document.addEventListener('keyup', e => {
        // e.keyCode 已经弃用
        const currentKey = e.key
        const tone = dxToneList.find(x => x.key == currentKey.toUpperCase())
        if (!tone) {
            console.error("当前按键无音源..")
            return
        }
        clickControlDX(tone)
    })

}

onMounted(() => keypressControlDX()
)

</script>

<style scoped lang="less">
#dx-panel {
    align-items: flex-start;
}

.dxTone-key {
    position: relative;
    flex: 1;
    padding-bottom: 20%;
    margin: 0;
    background: #fff;
    background: linear-gradient(-30deg, #f5f5f5, #fff);
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #fff, inset 1px 0 0 #fff, inset -1px 0 0 #fff, 0 4px 3px rgb(0 0 0 / 70%);
    border-radius: 0 0 5px 5px;
    height: 250px;

    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 5px 0 #8c4356;
    }
}

.keytip {
    width: 100%;
    color: #000;
    text-align: center;
    font-size: 14px;
    position: absolute;
    bottom: 5%;
    user-select: none;

    .keyname {
        margin-bottom: 5px;
    }

    .notename {
        color: blue;
        font-weight: bold;
    }
}
</style>