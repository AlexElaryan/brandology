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