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

snareId.addEventListener('click', RestartAndPlaySnareSoundFunction)
snareId.addEventListener('mouseenter', PlaySnareSoundCompletelyNoRestartsFunction)

openhatId.addEventListener('click', RestartAndPlayOpenhatSoundFunction)
openhatId.addEventListener('mouseenter', PlayOpenhatSoundCompletelyNoRestartFunction)

hihatId.addEventListener('click', RestartAndPlayHihatSoundFunction)
hihatId.addEventListener('mouseenter', PlayHihatSoundCompletelyNoRestartFunction)

bassId.addEventListener('click', RestartAndPlayBassSoundFunction)
bassId.addEventListener('mouseenter', PlayBassSoundCompletelyNoRestartFunction)

function RestartAndPlaySnareSoundFunction () {
  snareSound.pause()
  snareSound.currentTime = 0
  snareSound.play()
}
function PlaySnareSoundCompletelyNoRestartsFunction () {
  snareSound.play()
}
function RestartAndPlayOpenhatSoundFunction () {
  openhatSound.pause()
  openhatSound.currentTime = 0
  openhatSound.play()
}
function PlayOpenhatSoundCompletelyNoRestartFunction () {
  openhatSound.play()
}
function RestartAndPlayHihatSoundFunction () {
  hihatSound.pause()
  hihatSound.currentTime = 0
  hihatSound.play()
}
function PlayHihatSoundCompletelyNoRestartFunction () {
  hihatSound.play()
}
function RestartAndPlayBassSoundFunction () {
  bassdrumSound.pause()
  bassdrumSound.currentTime = 0
  bassdrumSound.play()
}
function PlayBassSoundCompletelyNoRestartFunction () {
  bassdrumSound.play()
}
