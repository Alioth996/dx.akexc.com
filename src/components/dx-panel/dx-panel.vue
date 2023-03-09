<template>
    <DxPanelTop />
    <div id="dx-panel" flex="~ row " justify-start ref="keypadElRef">
        <div v-for="(dxTone, index) in dxToneList" :key="dxTone.id" :data-key="dxTone.key"
            :data-name="filterToneToChinese(dxTone.name)" class="dxTone-key" :class="activerIndex == index ? 'active' : ''"
            @click="newClickPlay(index)">
            <div class="keytip">
                <div class="keyname">{{ dxTone.key }}</div>
                <div class="notename">{{ dxTone.name }}</div>
            </div>
        </div>
    </div>

    <div ref="audiosRef" v-show="false">
        <audio v-for="item in dxToneList" preload="auto" :src="item.url" :key="item.id" :data-id="item.id"
            :data-name="filterToneToChinese(item.name)"></audio>

    </div>
</template>

<script setup>
import dxToneList from '@/config/dxTone'
import { onMounted, onUnmounted, ref } from 'vue';
import DxPanelTop from './dx-panel-top.vue';

// 样式切换index
let activerIndex = ref()

let styleTimerOut = null

// audio播放器实例
// let dxAudio = null

// 当前播放的audio
let currentPlayAudio = null

// 全局键盘事件处理函数
let keyupPlayHandler = null

// 键盘父元素
const keypadElRef = $ref()

// audio父元素
const audiosRef = $ref()

// audioList
let audioList = null

// 记录所有已演奏的音的索引
const toneIndexList = []

// 鼠标点击演奏
// const clickPlay = ({ url }, index) => {
//     if (!dxAudio) {
//         dxAudio = new Audio(url)
//     } else {
//         dxAudio.src = url
//     }
//     dxAudio.volume = 0.5
//     activerIndex.value = index
//     // 目前来说是最优解,后期可能会使用 tone.js
//     dxAudio.addEventListener("canplaythrough", event => {
//         dxAudio.play();
//     });

//     dxAudio.addEventListener('play', e => {
//         console.log("洞箫吹奏中...", dxAudio.played);
//     })

//     dxAudio.addEventListener('ended', (e) => {
//         console.log("洞箫吹奏结束:", dxAudio.ended);
//     })


//     styleTimerOut = setTimeout(() => {
//         activerIndex.value = null
//         styleTimerOut = null
//         clearTimeout(styleTimerOut)
//     }, 200)
// }


/**
 * @desc 新点击演奏
 * @timer 2022-10-15
 * @author akex4396
 * @param {*number} index 
 */
const newClickPlay = (index) => {
    // 第一次演奏
    if (toneIndexList.length < 1) {
        toneIndexList.push(index)
    } else {
        // 取上一次演奏的audio索引
        const prevIndex = toneIndexList.pop()
        audioList[prevIndex].pause()
        toneIndexList.push(index)
    }

    activerIndex.value = index
    currentPlayAudio = audioList[index]

    // 这种方式太浪费性能了,只需要操作一个元素,却需要遍历所有的元素,开销过大
    // audioList.forEach(x => x.pause())
    currentPlayAudio.currentTime = 0
    currentPlayAudio.play()


    currentPlayAudio.addEventListener('play', e => {
        console.log("洞箫吹奏中...", currentPlayAudio.played);
    })

    currentPlayAudio.addEventListener('ended', (e) => {
        console.log("洞箫吹奏结束:", currentPlayAudio.ended);
    })

    styleTimerOut = setTimeout(() => {
        activerIndex.value = null
        styleTimerOut = null
        clearTimeout(styleTimerOut)
    }, 200)
}


/**
 * @desc 解析简谱成中文格式
 * @param {*string } toneName 
 * @return {*string } toneName
 */
const filterToneToChinese = (toneName) => {
    if (toneName.startsWith('-')) {
        return toneName = toneName.replace('-', '低音')
    } else if (toneName.endsWith('^')) {
        return toneName = `高音${toneName.replace('^', '')}`
    }
    return `中音${toneName}`
}

/**
 * @desc 键盘演奏
 * @time 2022/10/12
 */
const keypadPlay = () => {
    // const dxToneBtnList = [...keypadElRef.children]

    keyupPlayHandler = (e) => {
        // currentPlayAudio = dxToneBtnList.filter(x => x.getAttribute('data-key') == e.key.toUpperCase())[0]
        currentPlayAudio = document.querySelector(`[data-key=${e.key.toUpperCase()}]`)

        // js 模拟鼠标事件
        if (!currentPlayAudio) return
        const autoPlayEvent = new Event("click")

        currentPlayAudio.dispatchEvent(autoPlayEvent)

        styleTimerOut = setTimeout(() => {
            activerIndex.value = null
            styleTimerOut = null
            clearTimeout(styleTimerOut)
        }, 200)

    }

    // 键盘按下播放
    document.addEventListener('keyup', keyupPlayHandler)

}


onMounted(() => {
    audioList = [...audiosRef.children]
    keypadPlay()
}
)

onUnmounted(() => {
    document.removeEventListener('keyup', keyupPlayHandler)
    clearTimeout(styleTimerOut)
})

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
    box-shadow: inset 0 0 5px 0 #000 !important;

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