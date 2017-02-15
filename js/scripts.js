$( document ).ready(function()
{
  var snareSound = document.createElement('audio');
  snareSound.setAttribute('src', 'audio/snare.wav');

  var openhatSound = document.createElement('audio');
  openhatSound.setAttribute('src', 'audio/openhat.wav');

  var bassdrumSound = document.createElement('audio');
  bassdrumSound.setAttribute('src', 'audio/kick.wav');

  var hihatSound = document.createElement('audio');
  hihatSound.setAttribute('src', 'audio/hihat.wav');

  $('#snare').click(function()
  {
    snareSound.pause();
    snareSound.currentTime = 0;
    snareSound.play();
  });

  $('#snare').mouseover(function()
  {
    snareSound.play();
  });

  $('#openhat').click(function()
  {
    openhatSound.pause();
    openhatSound.currentTime =0;
    openhatSound.play();
  });

  $('#openhat').mouseover(function()
  {
    openhatSound.play();
  });

  $('#hihat').click(function()
  {
    hihatSound.pause();
    hihatSound.currentTime = 0;
    hihatSound.play();
  });

  $('#hihat').mouseover(function()
  {
    hihatSound.play();
  });

  $('#bass').click(function()
  {
    bassdrumSound.pause();
    bassdrumSound.currentTime =0;
    bassdrumSound.play();
  });

  $('#bass').mouseover(function()
  {
    bassdrumSound.play();
  });
});
