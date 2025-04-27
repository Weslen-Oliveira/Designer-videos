let swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Quando o slide ativo muda
    on: {
        slideChange: function () {
            // Pausar todos os vídeos quando o slide mudar
            const videos = document.querySelectorAll('.swiper-slide video');
            videos.forEach(video => {
                video.pause(); // Pausar todos os vídeos
                video.currentTime = 0; // Resetar o tempo de reprodução para o início
            });

            // Reproduzir o vídeo do slide ativo
            const activeSlide = this.slides[this.activeIndex]; // Obter o slide ativo
            const video = activeSlide.querySelector('video'); // Encontrar o vídeo no slide ativo
            if (video) {
                video.play(); // Iniciar o vídeo
            }
        },
    },
});