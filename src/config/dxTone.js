// const toneBaseUrl = '/audio/' // prod
const toneBaseUrl = '/src/assets/audio/'

// 洞箫G5 音域: 低音5 - 高音6(常见) [G3-A5]  ,-5 - 低音5, 5^ - 高音5
export default [
  { id: 32, name: '-5', keyCode: '87', key: 'W', url: toneBaseUrl + 'a87.mp3', type: 'white' },
  { id: 14, name: '-6', keyCode: '69', key: 'E', url: toneBaseUrl + 'a69.mp3', type: 'white' },
  { id: 27, name: '-7', keyCode: '82', key: 'R', url: toneBaseUrl + 'a82.mp3', type: 'white' },
  { id: 29, name: '1', keyCode: '84', key: 'T', url: toneBaseUrl + 'a84.mp3', type: 'white' },
  { id: 34, name: '2', keyCode: '89', key: 'Y', url: toneBaseUrl + 'a89.mp3', type: 'white' },
  { id: 30, name: '3', keyCode: '85', key: 'U', url: toneBaseUrl + 'a85.mp3', type: 'white' },
  { id: 18, name: '4', keyCode: '73', key: 'I', url: toneBaseUrl + 'a73.mp3', type: 'white' },
  { id: 24, name: '5', keyCode: '79', key: 'O', url: toneBaseUrl + 'a79.mp3', type: 'white' },
  { id: 25, name: '6', keyCode: '80', key: 'P', url: toneBaseUrl + 'a80.mp3', type: 'white' },
  { id: 10, name: '7', keyCode: '65', key: 'A', url: toneBaseUrl + 'a65.mp3', type: 'white' },
  { id: 28, name: '1^', keyCode: '83', key: 'S', url: toneBaseUrl + 'a83.mp3', type: 'white' },
  { id: 13, name: '2^', keyCode: '68', key: 'D', url: toneBaseUrl + 'a68.mp3', type: 'white' },
  { id: 15, name: '3^', keyCode: '70', key: 'F', url: toneBaseUrl + 'a70.mp3', type: 'white' },
  { id: 16, name: '4^', keyCode: '71', key: 'G', url: toneBaseUrl + 'a71.mp3', type: 'white' },
  { id: 17, name: '5^', keyCode: '72', key: 'H', url: toneBaseUrl + 'a72.mp3', type: 'white' },
  { id: 19, name: '6^', keyCode: '74', key: 'J', url: toneBaseUrl + 'a74.mp3', type: 'white' }
]

export const NotesMap = [
  { name: '-5', file: 'a87.mp3' },
  { name: '-6', file: 'a69.mp3' },
  { name: '-7', file: 'a82.mp3' },
  { name: '1', file: 'a84.mp3' },
  { name: '2', file: 'a89.mp3' },
  { name: '3', file: 'a85.mp3' },
  { name: '4', file: 'a73.mp3' },
  { name: '5', file: 'a79.mp3' },
  { name: '6', file: 'a80.mp3' },
  { name: '7', file: 'a65.mp3' },
  { name: '1^', file: 'a83.mp3' },
  { name: '2^', file: 'a68.mp3' },
  { name: '3^', file: 'a70.mp3' },
  { name: '4^', file: 'a71.mp3' },
  { name: '5^', file: 'a72.mp3' },
  { name: '6^', file: 'a74.mp3' }
]
