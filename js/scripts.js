var snareSound = document.createElement('audio')
snareSound.setAttribute('src', 'audio/snare.wav')

var openhatSound = document.createElement('audio')
openhatSound.setAttribute('src', 'audio/openhat.wav')

var bassdrumSound = document.createElement('audio')
bassdrumSound.setAttribute('src', 'audio/kick.wav')

var hihatSound = document.createElement('audio')
hihatSound.setAttribute('src', 'audio/hihat.wav')

var snareId = document.getElementById('snare')
var openhatId = document.getElementById('openhat')
var hihatId = document.getElementById('hihat')
var bassId = document.getElementById('bass')

snareId.addEventListener('click', snareClickFunction)
snareId.addEventListener('mouseenter', snareHoverFunction)

openhatId.addEventListener('click', openhatClickFunction)
openhatId.addEventListener('mouseenter', openhatHoverFunction)

hihatId.addEventListener('click', hihatClickFunction)
hihatId.addEventListener('mouseenter', hihatHoverFunction)

bassId.addEventListener('click', bassClickFunction)
bassId.addEventListener('mouseenter', bassHoverFunction)

function snareClickFunction () {
  snareSound.pause()
  snareSound.currentTime = 0
  snareSound.play()
}
function snareHoverFunction () {
  snareSound.play()
}
function openhatClickFunction () {
  openhatSound.pause()
  openhatSound.currentTime = 0
  openhatSound.play()
}
function openhatHoverFunction () {
  openhatSound.play()
}
function hihatClickFunction () {
  hihatSound.pause()
  hihatSound.currentTime = 0
  hihatSound.play()
}
function hihatHoverFunction () {
  hihatSound.play()
}
function bassClickFunction () {
  bassdrumSound.pause()
  bassdrumSound.currentTime = 0
  bassdrumSound.play()
}
function bassHoverFunction () {
  bassdrumSound.play()
}
