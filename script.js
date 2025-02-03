const circles = document.querySelectorAll('.mission-circle');
const circlesExp = document.querySelectorAll('.expert-circle');

circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        circles.forEach(c => c !== circle && c.classList.add('small'));
    });
    circle.addEventListener('mouseleave', () => {
        circles.forEach(c => c.classList.remove('small'));
    });
});

circlesExp.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        circlesExp.forEach(c => c !== circle && c.classList.add('small-exp'));
    });
    circle.addEventListener('mouseleave', () => {
        circlesExp.forEach(c => c.classList.remove('small-exp'));
    });
});
