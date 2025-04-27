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

//Menu mobile em telas abaixo de 820px
const botao = document.getElementById('img-logo');
const mobileMenu = document.getElementById('mobile-menu');


 botao.addEventListener('click', function(){
 
  let menuVisivel = window.getComputedStyle(mobileMenu).display;
  if(menuVisivel === 'none'){
    mobileMenu.style.display = 'block';
  }else {
    mobileMenu.style.display = 'none';
  }
console.log(mobileMenu)

 })



 window.addEventListener('scroll', function(){

  let menuMobile = window.getComputedStyle(mobileMenu).display;
  if(menuMobile === 'block'){
    menuMobile.style.display = 'none';
  }
 })