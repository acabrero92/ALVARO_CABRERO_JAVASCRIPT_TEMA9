document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../imagenes/imagen1.jpg',
        '../imagenes/imagen2.jpg',
        '../imagenes/imagen3.jpg',
        '../imagenes/imagen4.jpg'
    ];
    
    let currentIndex = 0;
    const imgElement = document.createElement('img');
    const main = document.querySelector('main.gallery');
    
    imgElement.src = images[currentIndex];
    main.appendChild(imgElement);
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }
});
