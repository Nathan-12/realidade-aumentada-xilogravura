    
    

    function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    // Fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function openModal() {
      var modal = document.getElementById('modal-media-video');
      var video = document.getElementById('video-content');
      modal.style.display = 'block';
      video.play(); // Inicia o vídeo assim que o modal é aberto
  }

  function closeModal() {
      var modal = document.getElementById('modal-media-video');
      var video = document.getElementById('video-content');
      video.pause();
      video.currentTime = 0;
      modal.style.display = 'none';
  }

  // Adiciona o evento "ended" ao vídeo para fechar o modal ao término do vídeo
  document.getElementById('video-content').addEventListener('ended', closeModal);

  // Fechar o modal ao clicar fora do vídeo
  document.addEventListener('click', function(event) {
      var modal = document.getElementById('modal-media-video');
      if (event.target === modal) {
          closeModal();
      }
  });

  