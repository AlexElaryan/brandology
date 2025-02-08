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


// const workPtitle = document.querySelectorAll('.work-process_item-title');
// const workPitem = document.querySelectorAll('.work-process_item');

// workPtitle.forEach((el, ind) => {
//     el.onclick = () => {
//         if (!workPitem[ind].classList.contains('work-process_item-active')) {
//             workPitem[ind].classList.add('work-process_item-active');
//         } else {
//             workPitem[ind].classList.remove('work-process_item-active');
//         }

//     }
// })

const toCases = document.querySelector('.to_cases');
const toCasesBlock = document.querySelector('.intro-to-cases-block');
const intro = document.querySelector('.intro');

toCases.onclick = () => {
    toCasesBlock.style.transform = 'scale(1)';
    intro.style.transform = 'scale(0)';
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
}