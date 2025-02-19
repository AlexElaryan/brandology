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

const intro = document.querySelector('.intro');

const toCases = document.querySelectorAll('.toCases');
const toCasesBlock = document.querySelector('.intro-to-cases-block');

const toServicesBlock = document.querySelector('.intro-to-services-block');
const toServices = document.querySelectorAll('.toServices');

function openPrevSites(btn, block) {
    btn.forEach(el => {
        el.onclick = () => {
            block.style.transform = 'scale(1)';
            intro.style.transform = 'scale(0)';

            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    })
}

openPrevSites(toCases, toCasesBlock);
openPrevSites(toServices, toServicesBlock);

const toWk = document.querySelectorAll('.contact-socials>div div:last-of-type');
const toTelegram = document.querySelectorAll('.contact-socials>div div:first-of-type');

toWk.forEach(el => {
    el.onclick = () => {
        window.open('https://vk.com/club228472327', '_blank');
    };
});

toTelegram.forEach(el => {
    el.onclick = () => {
        window.open('https://t.me/your_telegram_channel', '_blank');
    };
});

