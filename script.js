const darkMode = document.getElementById('dark-mode-toggle');
darkMode.onclick = () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode-header');
    if (darkMode.innerHTML === 'Dark') {
        darkMode.innerHTML = 'Light';
        darkMode.style.color = '#292A33';
        darkMode.style.backgroundColor = 'rgb(221, 221, 221)';
    } else {
        darkMode.innerHTML = 'Dark';
        darkMode.style.color = 'rgb(221, 221, 221)';
        darkMode.style.backgroundColor = '#292A33';
    }
}

const checkMediaQuery = () => {
    const icons = Array.from(document.getElementsByClassName('fa-brands'));
    for (let icon of icons) {
        if (window.matchMedia('(max-width: 768px)').matches) {
            icon.classList.add('fa-xl');
            icon.classList.remove('fa-2x');
            document.getElementById('kakuyomu').style.width = '22px';
            document.getElementById('kakuyomu').style.transform = 'translateY(-9px)';
        } else {
            icon.classList.add('fa-2x');
            icon.classList.remove('fa-xl');
            document.getElementById('kakuyomu').style.width = '30px'
            document.getElementById('kakuyomu').style.transform = 'translateY(1px)'
        }
    }
}
checkMediaQuery();
window.addEventListener('resize', checkMediaQuery);