<template>
    <div id="dx-panel" flex="~ row " justify-start>
        <div v-for="(dxTone,index) in dxToneList" :key="dxTone.keyCode" :data-keyCode="dxTone.keyCode"
            :data-name="dxTone.name" class="dxTone-key" :class="activerIndex == index ?'active':''"
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
import { onMounted, ref } from 'vue';

let activerIndex = ref()

const clickControlDX = ({ url }, index) => {
    // console.log(index);
    activerIndex.value = index
    console.log(activerIndex.value);
    // 目前来说构造函数时最优解,后期可能会使用 tone.js
    const dxAudio = new Audio(url)
    dxAudio.addEventListener("canplaythrough", event => {
        /* 音频可以播放；如果权限允许则播放 */
        dxAudio.volume = 0.5
        dxAudio.play();
    });

}

const keypressControlDX = () => {
    const dxToneBtnList = [...document.querySelector('#dx-panel').children]

    // keypress 按住不放会一直触发事件, keyup需要松开键盘才触发. 
    // 2. 可能考虑使用键盘驱动点击事件模拟效果
    document.addEventListener('keyup', e => {
        const currentBtn = dxToneBtnList.filter(x => x.getAttribute('data-keycode') == e.keyCode)[0]

        if (!currentBtn) return
        currentBtn.click()


        return
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