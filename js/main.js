document.addEventListener('DOMContentLoaded', function() {
    fetch('noticias.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.noticias.forEach(noticia => {
                const noticiaDiv = document.createElement('div');
                noticiaDiv.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
                newsContainer.appendChild(noticiaDiv);
            });
        });
});
