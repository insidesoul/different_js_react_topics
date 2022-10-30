const btn = document.getElementById('myBtn');
const spoiler = document.getElementById('spoiler');

btn.addEventListener('click', openSpoiler);


function openSpoiler() {
    spoiler.classList.toggle('closed')

    if(!spoiler.classList.contains('closed')) {
        document.addEventListener('keydown', handleEscape)
    } else {
        document.removeEventListener('keydown', handleEscape)
    }
}

function handleEscape(event) {
    if(event.key === 'Escape') {
        openSpoiler();
    }
}