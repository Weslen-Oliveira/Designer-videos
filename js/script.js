    // Quando o mouse passa por cima, toca o vídeo
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('mouseenter', () => {
        video.play();
        console.log('ativei play');
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reinicia o vídeo do começo
        console.log('ativei pause');
      });
    });

    //Abrir o display de videos 
    const displayVideos = document.getElementById('videos');
    const botaoVideos = document.getElementById('botao');

    botaoVideos.addEventListener('click', function(){      
      let displayAtualVideos = window.getComputedStyle(displayVideos);
      if(displayAtualVideos.display === 'none'){
        displayVideos.style.display = 'grid';
      }
    })