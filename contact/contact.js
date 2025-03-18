// google table 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const result = document.getElementById('result');
    const formS = document.forms['contact-form'];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwvQV9z_N6TqtiNdUsG0MeYsP7w-0CU_hsvr_4_-QbRY4rLAASfMF_u1wiYGqdw9NELOA/exec'


    if (!form) {
        console.error("Форма не найдена!");
        return;
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        result.innerHTML = "Please wait...";

        const formData = new FormData(form);
        const jsonObject = Object.fromEntries(formData);
        const json = JSON.stringify(jsonObject);

        try {
            // 1. Отправка в Web3Forms
            let response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            let web3Response = await response.json();

            if (response.ok) {
                result.innerHTML = web3Response.message;
            } else {
                console.log("Ошибка Web3Forms:", web3Response);
                result.innerHTML = web3Response.message;
                return; // Прерываем выполнение, если Web3Forms сломался
            }

            // 2. Отправка в Google Apps Script (только если Web3Forms успешен)
            if (formS) {
                let googleResponse = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(formS)
                });

                if (googleResponse.ok) {
                    console.log("Google Form отправлена успешно!");
                } else {
                    console.error("Ошибка отправки Google Form:", googleResponse.status);
                }
            }

            // 3. Очищаем форму и показываем сообщение
            form.reset();
            Swal.fire({
                title: "Спасибо",
                text: "Ваша заявка успешно отправлена",
                icon: "success"
            });

            result.style.display = "none";

        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
            result.innerHTML = "Что-то пошло не так!";
        }
    });
});


// 

const toWk = document.querySelectorAll('.contact-socials>div div:last-of-type');
const toTelegram = document.querySelectorAll('.contact-socials>div div:first-of-type');
const toTelegram1 = document.querySelectorAll('.toTelegram');

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

toTelegram1.forEach(el => {
    el.onclick = () => {
        window.open('https://t.me/+_requ6cgzuFlYjNi', '_blank');
    };
});


const burgerBtn = document.querySelectorAll('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelectorAll('.burger-menu-close');

burgerBtn.forEach(el => {
    el.onclick = () => {
        burgerMenu.classList.add('burger-menu-active');
        document.body.style.overflowY = 'hidden';
    }
})

burgerMenuClose.forEach(el => {
    el.onclick = () => {
        burgerMenu.classList.remove('burger-menu-active');
        document.body.style.overflowY = 'auto';
    }
});

