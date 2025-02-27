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
        });
    }
}
function observeVisibility(elementsSelector, animateClass) {
    const observer = new IntersectionObserver(entries => {
        let mostVisible = null;
        let maxRatio = 0;

        // Находим наиболее видимый элемент
        entries.forEach(entry => {
            if (entry.intersectionRatio > maxRatio) {
                mostVisible = entry.target;
                maxRatio = entry.intersectionRatio;
            }
        });

        // Добавляем класс animate только к наиболее видимому элементу
        elementsSelector.forEach(el => {
            el.classList.toggle(animateClass, el === mostVisible);
        });
    }, { threshold: [0.1, 0.5, 1] });

    // Применяем наблюдатель ко всем элементам, соответствующим селектору
    elementsSelector.forEach(el => observer.observe(el));
}



function updateCircleBehavior() {
    if (window.innerWidth >= 1380) {
        forCircleHover(circles, 'small');
        forCircleHover(circlesExp, 'small-exp');
        forCircleHover(circlesRef, 'small-ref');
    }
    else {
        observeVisibility(circles, 'mob-circle-anim');
        observeVisibility(circlesExp, 'mob-circle-anim');
        observeVisibility(circlesRef, 'mob-circle-anim');
    }
}

// Вызываем при загрузке
updateCircleBehavior();

// Следим за изменением размера экрана
window.addEventListener('resize', updateCircleBehavior);

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
        window.open('https://t.me/+_requ6cgzuFlYjNi', '_blank');
    };
});


if (document.querySelector(".expert-top-href")) {

    document.querySelector(".expert-top-href").addEventListener("mouseover", function () {
        document.querySelector(".expert .expert-title-b > div").classList.add('expert-href_active-parent');
    });

    document.querySelector(".expert-top-href").addEventListener("mouseout", function () {
        document.querySelector(".expert .expert-title-b > div").classList.remove('expert-href_active-parent');
    });
}


const organizationDetailsBtn = document.querySelector('.organization-details');
const organizationModal = document.querySelector('.modal-organizationDetails');
const organizationModalClose = document.querySelectorAll('.organization-modal-close');
const bodyFilterB = document.querySelector('.for-body_filter');

function modalOpenBtn(el) {
    el.classList.add('active-modal');
    bodyFilterB.classList.add('for-body_filter-active');
    document.body.style.overflow = 'hidden';
}

function modalCloseBtn(el) {
    el.classList.remove('active-modal');
    bodyFilterB.classList.remove('for-body_filter-active');
    document.body.style.overflow = 'auto';
}

if (organizationDetailsBtn) {
    organizationDetailsBtn.onclick = () => modalOpenBtn(organizationModal);
}

if (bodyFilterB) {
    bodyFilterB.onclick = () => {
        document.querySelectorAll('.active-modal').forEach(modalCloseBtn);
    };
}

organizationModalClose.forEach(closeBtn => {
    closeBtn.onclick = () => {
        modalCloseBtn(organizationModal);
    };
});
