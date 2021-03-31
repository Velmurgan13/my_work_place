import getColorPair from "random-color-pair";


module.exports = function getColorPair () {
    const isForegroundDark = Math.random() < 0.5
    const foregroundColor = randomColor({
      luminosity: isForegroundDark ? 'dark' : 'light'
    })
    const backgroundColor = randomColor({
      luminosity: isForegroundDark ? 'light' : 'dark'
    })
    return [foregroundColor, backgroundColor]
  }
