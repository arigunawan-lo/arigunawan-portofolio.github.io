const navAction = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeList = document.querySelectorAll('.resume-list');
const resumeBox = document.querySelectorAll('.resume-box');

const portofolioList = document.querySelectorAll('.portofolio-list');
const portofolioBox = document.querySelectorAll('.portofolio-box');

// navbar actions and all section cube rotation
navAction.forEach((nav, e) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${e * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[e].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1); //hanya menerima input angka
        arrSecs.forEach(arrSecs => {
            if (arrSecs.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    });
});

// resume sections ketika di klik
resumeList.forEach((list, e) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBox[e].classList.add('active');
    });
});
// portofolio section ketika di klik
portofolioList.forEach((list, e) => {
    list.addEventListener('click', () => {
        document.querySelector('.portofolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portofolio-box.active').classList.remove('active');
        portofolioBox[e].classList.add('active');
    });
});


// visibilitas untuk contact sections ketika reload (reload kubus animasi)
setTimeout(() => {
    sections[4].classList.remove('active')
});