// const toneBaseUrl = '/audio/' // prod
const toneBaseUrl = '/src/assets/audio/'

const prevFix = 'flute_'

// 洞箫G5 音域: 低音5 - 高音6(常见) [G3-A5]  ,-5 - 低音5, 5^ - 高音5
export default [
  { id: 32, name: '-5', keyCode: '87', key: 'W', url: `${toneBaseUrl}${prevFix}00.ogg` },
  { id: 14, name: '-6', keyCode: '69', key: 'E', url: `${toneBaseUrl}${prevFix}01.ogg` },
  { id: 27, name: '-7', keyCode: '82', key: 'R', url: `${toneBaseUrl}${prevFix}02.ogg` },
  { id: 29, name: '1', keyCode: '84', key: 'T', url: `${toneBaseUrl}${prevFix}03.ogg` },
  { id: 34, name: '2', keyCode: '89', key: 'Y', url: `${toneBaseUrl}${prevFix}04.ogg` },
  { id: 30, name: '3', keyCode: '85', key: 'U', url: `${toneBaseUrl}${prevFix}05.ogg` },
  { id: 18, name: '4', keyCode: '73', key: 'I', url: `${toneBaseUrl}${prevFix}06.ogg` },
  { id: 24, name: '5', keyCode: '79', key: 'O', url: `${toneBaseUrl}${prevFix}07.ogg` },
  { id: 25, name: '6', keyCode: '80', key: 'P', url: `${toneBaseUrl}${prevFix}08.ogg` },
  { id: 10, name: '7', keyCode: '65', key: 'A', url: `${toneBaseUrl}${prevFix}09.ogg` },
  { id: 28, name: '1^', keyCode: '83', key: 'S', url: `${toneBaseUrl}${prevFix}10.ogg` },
  { id: 13, name: '2^', keyCode: '68', key: 'D', url: `${toneBaseUrl}${prevFix}11.ogg` },
  { id: 15, name: '3^', keyCode: '70', key: 'F', url: `${toneBaseUrl}${prevFix}12.ogg` },
  { id: 16, name: '4^', keyCode: '71', key: 'G', url: `${toneBaseUrl}${prevFix}13.ogg` },
  { id: 17, name: '5^', keyCode: '72', key: 'H', url: `${toneBaseUrl}${prevFix}14.ogg` },
  { id: 19, name: '6^', keyCode: '74', key: 'J', url: `${toneBaseUrl}${prevFix}15.ogg` }
]
