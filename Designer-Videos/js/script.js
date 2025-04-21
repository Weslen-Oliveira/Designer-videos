    // Quando o mouse passa por cima, toca o vídeo
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('mouseenter', () => {
        video.play();
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reinicia o vídeo do começo
      });
    });