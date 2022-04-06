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
addBackGroundHeader();

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

languagesHandle();

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
hamburgerHandle();

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
newsTabsHandle();

// Back to top
let backToTop = document.querySelector(".backtop");

const backToTopHandle = () => {
    backToTop.addEventListener("click", (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > header.offsetHeight) {
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
backToTopHandle();

// Progress Bar
let progressBar = document.querySelector(".progress-bar");

const progressBarHandle = () => {
    window.addEventListener("scroll", (e) => {
        let winScroll = window.scrollY
        let height = document.body.offsetHeight - window.innerHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    window.addEventListener("load", (e) => {
        let winScroll = window.scrollY
        let height = document.body.offsetHeight - window.innerHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
};
progressBarHandle();


//
