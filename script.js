const paragraph = document.getElementById('paragraph');

function highlight() {
    const boldWords = paragraph.querySelectorAll('strong');
    for (const word of boldWords) {
        word.style.color = 'green';
    }
}

function return_normal() {
    const boldWords = paragraph.querySelectorAll('strong');
    for (const word of boldWords) {
        word.style.color = 'black';
    }
}

const highlightLink = document.querySelector('a'); // Change this selector according to your link's id or class
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
