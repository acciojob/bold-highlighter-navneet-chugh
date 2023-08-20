function highlight() {
    const boldWords = document.querySelectorAll('p strong');
    for (const word of boldWords) {
        word.style.color = 'green';
    }
}

function return_normal() {
    const boldWords = document.querySelectorAll('p strong');
    for (const word of boldWords) {
        word.style.color = 'black';
    }
}

const highlightLink = document.querySelector('a');
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
