// clear form before upload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// toogle and responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navlist = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navlist.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();