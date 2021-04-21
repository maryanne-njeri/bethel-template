const bar = document.querySelector('i');
const links = document.getElementById('links');

bar.addEventListener('click', () => {
    if (links.style.display === 'none') {
        links.style.display = 'block';
    }else {
        links.style.display = 'none';
    }
});