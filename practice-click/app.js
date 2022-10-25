const btns = document.querySelectorAll('.accordion');
btns.forEach(btn => btn.addEventListener('click', togglePanel));

function togglePanel() {
    this.nextElementSibling.classList.toggle('show');
}