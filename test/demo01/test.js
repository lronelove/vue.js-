function once(fn) {
  var hasEmit = false

  return function() {
    if (!hasEmit) {
      hasEmit = true
      fn.apply(this)
    }
  }
}

const log = () => { console.log('hello world') }

const onceLog = once(log)

onceLog()
onceLog()