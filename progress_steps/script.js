const progress = document.getElementById('progress');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

btnPrev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1)
        currentActive = 1;
    update();
});

function update() {
    circles.forEach( (circle, index) => {
        if (index < currentActive)
            circle.classList.add('active');
        else
            circle.classList.remove('active');
    });
    let actives = document.querySelectorAll('.active');
    let progressPercentage = (actives.length - 1) / (circles.length - 1);
    progress.style.width = progressPercentage * 100 + '%';
    btnPrev.disabled = (currentActive == 1);
    btnNext.disabled = (currentActive == circles.length);
    
}