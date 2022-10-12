// const toneBaseUrl = '/audio/' // prod
const toneBaseUrl = '/audio/'

const prevFix = 'zhudi'

// 洞箫G5 音域: 低音5 - 高音6(常见) [G3-A5]  ,-5 - 低音5, 5^ - 高音5
export default [
  { id: 32, name: '-5', keyCode: '87', key: 'W', url: `${toneBaseUrl}${prevFix}00.mp3` },
  { id: 14, name: '-6', keyCode: '69', key: 'E', url: `${toneBaseUrl}${prevFix}01.mp3` },
  { id: 27, name: '-7', keyCode: '82', key: 'R', url: `${toneBaseUrl}${prevFix}02.mp3` },
  { id: 29, name: '1', keyCode: '84', key: 'T', url: `${toneBaseUrl}${prevFix}03.mp3` },
  { id: 34, name: '2', keyCode: '89', key: 'Y', url: `${toneBaseUrl}${prevFix}04.mp3` },
  { id: 30, name: '3', keyCode: '85', key: 'U', url: `${toneBaseUrl}${prevFix}05.mp3` },
  { id: 18, name: '4', keyCode: '73', key: 'I', url: `${toneBaseUrl}${prevFix}06.mp3` },
  { id: 24, name: '5', keyCode: '79', key: 'O', url: `${toneBaseUrl}${prevFix}07.mp3` },
  { id: 25, name: '6', keyCode: '80', key: 'P', url: `${toneBaseUrl}${prevFix}08.mp3` },
  { id: 10, name: '7', keyCode: '65', key: 'A', url: `${toneBaseUrl}${prevFix}09.mp3` },
  { id: 28, name: '1^', keyCode: '83', key: 'S', url: `${toneBaseUrl}${prevFix}10.mp3` },
  { id: 13, name: '2^', keyCode: '68', key: 'D', url: `${toneBaseUrl}${prevFix}11.mp3` },
  { id: 15, name: '3^', keyCode: '70', key: 'F', url: `${toneBaseUrl}${prevFix}12.mp3` },
  { id: 16, name: '4^', keyCode: '71', key: 'G', url: `${toneBaseUrl}${prevFix}13.mp3` },
  { id: 17, name: '5^', keyCode: '72', key: 'H', url: `${toneBaseUrl}${prevFix}14.mp3` },
  { id: 19, name: '6^', keyCode: '74', key: 'J', url: `${toneBaseUrl}${prevFix}15.mp3` }
]
