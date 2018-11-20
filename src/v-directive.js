import Vue from 'vue'
let hotKey = {
  currentKey: null,
  currentValueKey: null,
  register (el, value, func) {
    let keyList = value
    let fristKey = keyList[0]
    let clickTimes = 0
    el.onkeyup = (e) => {
      hotKey.currentKey = null
      e.stopPropagation()
      e.preventDefault()
    }
    el.onkeydown = (e) => {
      // 获取键值
      let keyCode = e.keyCode
      clickTimes++
      if (hotKey.currentKey) {
        let curKeyByList = keyList[clickTimes]
        if (keyCode === curKeyByList) {
          if (clickTimes >= keyList.length - 1) {
            hotKey.currentKey = null
            fristKey = keyList[0]
            clickTimes = 0
            func && func()
          }
        }
      } else {
        clickTimes = 0
      }
      if (keyCode === fristKey) {
        hotKey.currentKey = keyCode
      }
      e.stopPropagation()
      e.preventDefault()
    }
  }
}
// 快捷键事件指令
Vue.directive('hotkey', {
  bind (el, binding) {
    let fn = binding.value.fn
    let keyList = binding.value.keyList
    hotKey.register(el, keyList, () => {
      fn && fn()
    })
  }
})
