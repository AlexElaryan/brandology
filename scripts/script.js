const circles = document.querySelectorAll('.mission-circle');
const circlesExp = document.querySelectorAll('.expert-circle');
const circlesRef = document.querySelectorAll('.refauna_circles-item');

function forCircleHover(circle, classN) {
    if (circle) {
        circle.forEach(el => {
            el.addEventListener('mouseenter', () => {
                circle.forEach(c => c !== el && c.classList.add(classN));
            });
            el.addEventListener('mouseleave', () => {
                circle.forEach(c => c.classList.remove(classN));
            });
        })
    }
}

forCircleHover(circles, 'small');
forCircleHover(circlesExp, 'small-exp');
forCircleHover(circlesRef, 'small-ref');

const toCases = document.querySelector('.to_cases');
const toCasesBlock = document.querySelector('.intro-to-cases-block');
const intro = document.querySelector('.intro');

toCases.onclick = () => {
    toCasesBlock.style.transform = 'scale(1)';
    intro.style.transform = 'scale(0)';

    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}