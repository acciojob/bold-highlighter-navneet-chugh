const paragraph = document.getElementById('paragraph');
const highlightLink = document.getElementById('highlightLink');
function highlight() {
    //Write your code here
const boldWords = paragraph.querySelectorAll('strong');
    for (const word of boldWords) {
        word.style.color = 'green';
    }

}


function return_normal() {
    //Write your code here
const boldWords = paragraph.querySelectorAll('strong');
    for (const word of boldWords) {
        word.style.color = 'black';
    }
    
}
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
