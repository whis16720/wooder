// Header
let header = document.querySelector(".header");

const addBackGroundHeader = () => {
    let heightHeader = header.offsetHeight;
    window.addEventListener("load", (e) => {
        if (window.pageYOffset >= heightHeader) {
            header.classList.add("active");
        }
    });

    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= heightHeader) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
};

// Languages

let lang = document.querySelector(".header .header__right .header__right-lang");
let currentLang = document.querySelector(
    ".header .header__right .header__right-lang .current"
);
let currentSpan = document.querySelector(
    ".header .header__right .header__right-lang .current span"
);
let hiddenLang = document.querySelector(
    ".header .header__right .header__right-lang .hidden"
);

const languagesHandle = () => {
    lang.addEventListener("click", (e) => {
        currentLang.classList.toggle("active");
        hiddenLang.classList.toggle("active");
        e.stopPropagation();
    });

    hiddenLang.addEventListener("click", (e) => {
        let flag = currentSpan.textContent;
        currentSpan.textContent = e.target.textContent;
        e.target.textContent = flag;
    });

    document.body.addEventListener("click", (e) => {
        currentLang.classList.remove("active");
        hiddenLang.classList.remove("active");
    });
};

//Mobile Hamburger

let hamburger = document.querySelector(
    ".header .header__right .header__right-hamburger"
);
let menuMobile = document.querySelector(".navbar");

const hamburgerHandle = () => {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menuMobile.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 991) {
            menuMobile.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
};

// News Tabs

let btnNews = document.querySelectorAll(".scnews .container .btn .btn__news");
let newsList = document.querySelectorAll(".scnews .container .scnews__list");

const newsTabsHandle = () => {
    btnNews.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            if (
                document.querySelector(
                    ".scnews .container .btn .btn__news.active"
                )
            ) {
                document
                    .querySelector(".scnews .container .btn .btn__news.active")
                    .classList.remove("active");
            }
            if (
                document.querySelector(
                    ".scnews .container .scnews__list.active"
                )
            ) {
                document
                    .querySelector(".scnews .container .scnews__list.active")
                    .classList.remove("active");
            }
            item.classList.add("active");
            newsList[index].classList.add("active");
        });
    });
};

// Back to top
let backToTop = document.querySelector(".backtop");

const backToTopHandle = () => {
    backToTop.addEventListener("click", (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $(".btn__top").on("click", (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > 600) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });
    window.addEventListener("load", (e) => {
        if (window.pageYOffset > header.offsetHeight) {
            backToTop.classList.add("active");
        }
    });
};

// Progress Bar
let progressBar = document.querySelector(".progress-bar");

const progressBarHandle = () => {
    window.addEventListener("scroll", (e) => {
        let winScroll = window.scrollY;
        let height = document.body.offsetHeight - window.innerHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    window.addEventListener("load", (e) => {
        let winScroll = window.scrollY;
        let height = document.body.offsetHeight - window.innerHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
};

//Scroll to section
let menuItem = document.querySelectorAll(
    ".header .container-fluid .header__menu .header__menu-item a"
);
let mobileMenuItem = document.querySelectorAll(".navbar .container ul li a");

let sections = [];
const removeActive = (item) => {
    menuItem.forEach((itemMenu, index) => {
        itemMenu.classList.remove("active");
    });
};

const scrollToSection = () => {
    mobileMenuItem.forEach((item) => {
        let href = item.getAttribute("href").replace("#", ".");
        let section = document.querySelector(href);
        item.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: section.offsetTop - header.offsetHeight + 1,
                behavior: "smooth",
            });
            menuMobile.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
    menuItem.forEach((item, index) => {
        let href = item.getAttribute("href").replace("#", ".");
        let section = document.querySelector(href);
        sections.push(section);
        item.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: section.offsetTop - header.offsetHeight + 1,
                behavior: "smooth",
            });
            removeActive();
            item.classList.add("active");
        });
    });

    window.addEventListener("scroll", (e) => {
        sections.forEach((section, index) => {
            if (
                window.pageYOffset > section.offsetTop - header.offsetHeight &&
                window.pageYOffset < section.offsetTop + section.offsetHeight
            ) {
                removeActive();
                menuItem[index].classList.add("active");
            } else {
                menuItem[index].classList.remove("active");
            }
        });
    });
};

//Popop up
let btn_video = document.querySelectorAll(
    ".scvideo .scvideo__list .scvideo__list-item .thumbnail"
);
let iframe = document.querySelector(".popup-video iframe");
let popup_video = document.querySelector(".popup-video");
let close = document.querySelector(".popup-video .close");

const popopUpHandle = () => {
    btn_video.forEach((item) => {
        item.addEventListener("click", (e) => {
            let video_id = item.getAttribute("data-id");
            iframe.setAttribute(
                "src",
                "https://www.youtube.com/embed/" + video_id
            );
            popup_video.classList.add("active");
        });
    });

    close.addEventListener("click", () => {
        iframe.setAttribute("src", "");
        popup_video.classList.remove("active");
    });
    $(".popup-video").on("click", (e) => {
        iframe.setAttribute("src", "");
        popup_video.classList.remove("active");
    });
};

// Slider Hero
let heroSlider = ".schero .schero__list";

let number = ".schero .schero__bottom .schero__bottom-left span";

let dots = ".schero__bottom-left";

const sliderHandle = () => {
    $(heroSlider).flickity({
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 2000,
        on: {
            change(e) {
                $(number).html((e + 1).toString().padStart(2, 0));
            },
            ready() {
                let e = $(".flickity-page-dots");
                $(dots).append(e);
            },
        },
    });
    $(".btn-arrow.--next").on("click", function (e) {
        e.preventDefault();
        $(heroSlider).flickity("next");
    });
    $(".btn-arrow.--prev").on("click", function (e) {
        e.preventDefault();
        $(heroSlider).flickity("previous");
    });
};

//Slider

let slider = document.querySelector(".scslider .scslider__list");

const showSliderDrag = () => {
    $(slider).flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: 4,
        freeScroll: true,
    }),
        $(slider).on("scroll.flickity", function (e, w) {
            w = 100 * w + "%";
            $(".progress").css("width", w);
        });
};

Fancybox.bind("[data-fancybox]", {
    infinite: true,
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    },
});
const start = () => {
    addBackGroundHeader();
    languagesHandle();
    hamburgerHandle();
    newsTabsHandle();
    backToTopHandle();
    progressBarHandle();
    scrollToSection();
    popopUpHandle();
    sliderHandle();
    showSliderDrag();
    AOS.init();
};
start();

// Loading



let loading = document.querySelector(".main-loading");
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 1500);
});

// const sliderHandle = () => {
//     let currentSlider = 0;
//     listItemSlider.forEach((item, index) => {
//         if (item.classList.contains("active")) {
//             currentSlider = index;
//         }
//     });
//     document
//         .querySelector(".btn-arrow.--next")
//         .addEventListener("click", () => {
//             if (currentSlider < listItemSlider.length - 1) {
//                 goTo(currentSlider + 1);
//             } else {
//                 goTo(0);
//             }
//         });

//     document
//         .querySelector(".btn-arrow.--prev")
//         .addEventListener("click", () => {
//             if (currentSlider > 0) {
//                 goTo(currentSlider - 1);
//             } else {
//                 goTo(listItemSlider.length - 1);
//             }
//         });

//     dot[currentSlider].classList.add("active");

//     dot.forEach((item, index) => {
//         item.addEventListener("click", () => {
//             goTo(index);
//         });
//     });

//     const goTo = (index) => {
//         listItemSlider[currentSlider].classList.remove("active");
//         listItemSlider[index].classList.add("active");
//         dot[currentSlider].classList.remove("active");
//         dot[index].classList.add("active");

//         currentSlider = index;
//         number.textContent = (currentSlider + 1).toString().padStart(2, 0);
//     };
// };
// sliderHandle();
