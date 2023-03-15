function myThrottle(func, ms = 1000) {
  let canRun = true

  return function (...args) {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      func.apply(this, args)
      canRun = true
    }, ms)
  }
}

const task = () => {
  console.log('run task')
}
const myThrottleTask = myThrottle(task, 5000)

window.addEventListener('scroll', myThrottleTask)
