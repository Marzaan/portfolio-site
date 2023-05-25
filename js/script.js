// FAQs Script
let faqQA = document.querySelectorAll('.faq');

faqQA.forEach((qa) => {
    qa.addEventListener('click', () => {
        let faqAnswer = qa.querySelector('.faq-qa p');
        faqAnswer.classList.toggle('show');

        let faqIcon = qa.querySelector('.faq-icon i');
        if(faqAnswer.classList.contains('show')){
            faqIcon.classList.remove('fa-plus');
            faqIcon.classList.add('fa-minus');
        }
        else{
            faqIcon.classList.remove('fa-minus');
            faqIcon.classList.add('fa-plus');
        }
    });
});

// Nav Bar Section
const menu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    menu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    menu.style.display = 'none';
});