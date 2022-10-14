<template>
    <DxPanelTop />
    <div id="dx-panel" flex="~ row " justify-start>
        <div v-for="(dxTone,index) in dxToneList" :key="dxTone.id" :data-keyCode="dxTone.keyCode"
            :data-name="filterToneToChinese(dxTone.name)" class="dxTone-key" :class="activerIndex == index ?'active':''"
            @mousedown.stop=" clickControlDX(dxTone,index)" ref="toneBtn">
            <div class="keytip">
                <div class="keyname">{{dxTone.key}}</div>
                <div class="notename">{{dxTone.name}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import dxToneList from '@/config/dxTone'
import { onMounted, ref } from 'vue';
import DxPanelTop from './dx-panel-top.vue';

const toneBtn = ref()

// 样式切换index
let activerIndex = ref()

let styleTimerOut = null
let dxAudio = null

// 鼠标点击演奏
const clickControlDX = ({ url }, index) => {
    if (!dxAudio) {
        dxAudio = new Audio(url)
    } else {
        dxAudio.src = url
    }
    activerIndex.value = index
    // 目前来说是最优解,后期可能会使用 tone.js
    dxAudio.addEventListener("canplaythrough", event => {
        dxAudio.volume = 0.5
        dxAudio.play();
    });

    dxAudio.addEventListener('play', e => {
        console.log("洞箫吹奏中...", dxAudio.played);
    })

    dxAudio.addEventListener('ended', (e) => {
        console.log("洞箫吹奏结束:", dxAudio.ended);
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
const keypressControlDX = () => {
    const dxToneBtnList = [...document.querySelector('#dx-panel').children]

    // 1. keypress 按住不放会一直触发事件, keyup需要松开键盘才触发. 
    // 2.考虑使用键盘驱动点击事件模拟效果
    document.addEventListener('keyup', e => {
        const currentBtn = dxToneBtnList.filter(x => x.getAttribute('data-keycode') == e.keyCode)[0]
        console.log(currentBtn);

        // js 模拟鼠标事件
        const autoMouseEvent = document.createEvent("MouseEvents");
        autoMouseEvent.initMouseEvent("mousedown", true, true);
        currentBtn.dispatchEvent(autoMouseEvent)


        // if (!currentBtn) return


        styleTimerOut = setTimeout(() => {
            activerIndex.value = null
            styleTimerOut = null
            clearTimeout(styleTimerOut)
        }, 200)
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