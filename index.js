const searchInput = document.querySelector('#search');
const shows = document.querySelectorAll('.show');

searchInput.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase();
    
    shows.forEach(item => {
    item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})