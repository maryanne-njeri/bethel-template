// const bar = document.querySelector('i');
// const links = document.getElementById('links');

let selectObj = {
    bar : document.querySelector('i'),
    links : document.getElementById('links')
}

selectObj.bar.addEventListener('click', () => {
    if (selectObj.links.style.display === 'none') {
        selectObj.links.style.display = 'block';
    }else {
        selectObj.links.style.display = 'none';
    }
});