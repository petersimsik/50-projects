const cups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => hiliteCups(index));
})

updateBigCup();

function hiliteCups(clickedIndex) {
    if (cups[clickedIndex].classList.contains('full')) {
        cups[clickedIndex].classList.remove('full');
        clickedIndex--;
    }

    cups.forEach((cup, index) => {
        if (index <= clickedIndex)
        {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = document.querySelectorAll('.cup-small').length;
    
    if (fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups/totalCups * 330}px`;
        percentage.innerText = `${fullCups/totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}