const images = document.querySelectorAll('.imagens-sub img');
const infoDiv = document.getElementById('info');

images.forEach(image => {
  image.addEventListener('click', () => {
    const info = image.getAttribute('data-info');
    infoDiv.textContent = info;
    infoDiv.style.display = 'block';
  });
});