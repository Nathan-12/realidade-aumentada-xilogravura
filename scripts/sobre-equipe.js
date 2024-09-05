function openModalNathan() {
  closeModalLucia();
  closeModalJessyca();
  var modal = document.getElementById('modal-media-video');
  var video = document.getElementById('video-content');
  modal.style.display = 'block';
  video.play(); // Inicia o vídeo assim que o modal é aberto
}

function openModalLucia() {
  closeModalNathan();
  closeModalJessyca();
  var modal = document.getElementById('modal-media-video-lucia');
  var video = document.getElementById('video-content-lucia');
  modal.style.display = 'block';
  video.play(); // Inicia o vídeo assim que o modal é aberto
}

function openModalJessyca() {
  closeModalNathan();
  closeModalLucia();
  var modal = document.getElementById('modal-media-video-jessyca');
  var video = document.getElementById('video-content-jessyca');
  modal.style.display = 'block';
  video.play(); // Inicia o vídeo assim que o modal é aberto
}

function closeModalNathan() {
  var modal = document.getElementById('modal-media-video');
  var video = document.getElementById('video-content');
  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}

function closeModalLucia() {
  var modal = document.getElementById('modal-media-video-lucia');
  var video = document.getElementById('video-content-lucia');
  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}

function closeModalJessyca() {
  var modal = document.getElementById('modal-media-video-jessyca');
  var video = document.getElementById('video-content-jessyca');
  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}