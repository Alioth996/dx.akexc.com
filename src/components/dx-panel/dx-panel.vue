<template>
    <DxPanelTop />
    <div id="dx-panel" flex="~ row " justify-start>
        <div v-for="(dxTone,index) in dxToneList" :key="dxTone.id" :data-keyCode="dxTone.keyCode"
            :data-name="filterToneToChinese(dxTone.name)" class="dxTone-key" :class="activerIndex == index ?'active':''"
            @click.stop=" clickControlDX(dxTone,index)" ref="toneBtn">
            <div class="keytip">
                <div class="keyname">{{dxTone.key}}</div>
                <div class="notename">{{dxTone.name}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import dxToneList from '@/config/dxTone'
import { onMounted, ref, computed } from 'vue';
import DxPanelTop from './dx-panel-top.vue';


// 样式切换index
let activerIndex = ref()

let timerOut = null
let dxAudio = null
// 鼠标点击演奏
const clickControlDX = ({ url }, index) => {
    if (!dxAudio) {
        dxAudio = new Audio(url)
    } else {
        dxAudio.src = url
    }
    activerIndex.value = index
    // 目前来说构造函数时最优解,后期可能会使用 tone.js
    dxAudio.addEventListener("canplaythrough", event => {
        /* 音频可以播放；如果权限允许则播放 */
        dxAudio.volume = 0.5
        // dxAudio.currentTime = 0
        /**
         * @desc preload 设置预加载
         * 
         * @attr none: 表示不应该预加载视频。
         * @attr metadata: 表示仅预先获取视频的元数据（例如长度）
         * @attr auto: 表示可以下载整个视频文件，即使用户不希望使用它。
         * 空字符串: 和值为 auto 一致。每个浏览器的默认值都不相同，即使规范建议设置为 metadata。
         * 
         * @link https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video#attr-preload
         */
        dxAudio.play();
        // timerOut = setTimeout(() => {
        //     dxAudio.src = ''
        //     timerOut = null
        //     clearTimeout(timerOut)
        // }, 2000)
    });

    dxAudio.addEventListener('play', e => {
        console.log("洞箫吹奏中...", dxAudio.played);
    })

    dxAudio.addEventListener('ended', (e) => {
        console.log("洞箫吹奏结束:", dxAudio.ended);
    })


    timerOut = setTimeout(() => {
        activerIndex.value = null
        timerOut = null
        clearTimeout(timerOut)
    }, 200)
}


// 音名转换为十二平均律
const filterToneToChinese = (toneName) => {
    if (toneName.startsWith('-')) {
        return toneName = toneName.replace('-', '低音')
    } else if (toneName.endsWith('^')) {
        return toneName = `高音${toneName.replace('^', '')}`
    }
    return `中音${toneName}`
}

const keypressControlDX = () => {
    const dxToneBtnList = [...document.querySelector('#dx-panel').children]

    // 1. keypress 按住不放会一直触发事件, keyup需要松开键盘才触发. 
    // 2.考虑使用键盘驱动点击事件模拟效果
    document.addEventListener('keyup', e => {
        const currentBtn = dxToneBtnList.filter(x => x.getAttribute('data-keycode') == e.keyCode)[0]

        if (!currentBtn) return
        currentBtn.click()
        timerOut = setTimeout(() => {
            activerIndex.value = null
            timerOut = null
            clearTimeout(timerOut)
        }, 200)


        // e.keyCode 已经弃用
        // const currentKey = e.key
        // const tone = dxToneList.find(x => x.key == currentKey.toUpperCase())
        // if (!tone) {
        //     console.error("当前按键无音源..")
        //     return
        // }
        // clickControlDX(tone)
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
    cursor: pointer;

    &:hover {
        box-shadow: inset 0 0 5px 0 #8c4356;

    }


}

.active {
    box-shadow: inset 0 0 5px 0 #000;

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