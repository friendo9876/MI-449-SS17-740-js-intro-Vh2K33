var snareSound = document.createElement('audio')
snareSound.setAttribute('src', 'audio/snare.wav')

var openhatSound = document.createElement('audio')
openhatSound.setAttribute('src', 'audio/openhat.wav')

var bassdrumSound = document.createElement('audio')
bassdrumSound.setAttribute('src', 'audio/kick.wav')

var hihatSound = document.createElement('audio')
hihatSound.setAttribute('src', 'audio/hihat.wav')

document.getElementById('snare').addEventListener('click', snarefunction1)
document.getElementById('snare').addEventListener('mouseover', snarefunction2)

document.getElementById('openhat').addEventListener('click', openhatfunction1)
document.getElementById('openhat').addEventListener('mouseover', openhatfunction2)

document.getElementById('hihat').addEventListener('click', hihatfunction1)
document.getElementById('hihat').addEventListener('mouseover', hihatfunction2)

document.getElementById('bass').addEventListener('click', bassfunction1)
document.getElementById('bass').addEventListener('mouseover', bassfunction2)

function snarefunction1 () {
  snareSound.pause()
  snareSound.currentTime = 0
  snareSound.play()
}
function snarefunction2 () {
  snareSound.play()
}
function openhatfunction1 () {
  openhatSound.pause()
  openhatSound.currentTime = 0
  openhatSound.play()
}
function openhatfunction2 () {
  openhatSound.play()
}
function hihatfunction1 () {
  hihatSound.pause()
  hihatSound.currentTime = 0
  hihatSound.play()
}
function hihatfunction2 () {
  hihatSound.play()
}
function bassfunction1 () {
  bassdrumSound.pause()
  bassdrumSound.currentTime = 0
  bassdrumSound.play()
}
function bassfunction2 () {
  bassdrumSound.play()
}
