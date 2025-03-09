const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            Swal.fire({
                title: "Спасибо",
                text: "Ваша заявка успешно отправлена",
                icon: "success"
            });
            result.style.display = "none";
        });
});


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
