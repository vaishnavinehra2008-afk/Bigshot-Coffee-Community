/* =====================================================
   BIGSHOT HOME PAGE
   COMPLETE JAVASCRIPT
===================================================== */


// const menuButton = document.getElementById("menuButton");
// const menuOverlay = document.getElementById("menuOverlay");

// if (menuButton && menuOverlay) {

//     menuButton.addEventListener("click", function () {

//         const isOpen = menuOverlay.classList.contains("active");

//         if (isOpen) {

//             menuOverlay.classList.remove("active");
//             menuOverlay.setAttribute("aria-hidden", "true");
//             document.body.classList.remove("menu-open");

//         } else {

//             menuOverlay.classList.add("active");
//             menuOverlay.setAttribute("aria-hidden", "false");
//             document.body.classList.add("menu-open");

//         }

//     });

// }

//  menuLinks = document.querySelectorAll(".menu-inner nav a");

// menuLinks.forEach(link => {
//     link.addEventListener("click", () => {
//         menuOverlay.classList.remove("active");
//     });
// });


/* Close menu when clicking a link */

// const menuLinks =
//     document.querySelectorAll(
//         ".menu-content a"
//     );


//     menuLinks.forEach(function (link) {

//         link.addEventListener("click", function () {

//             if (menuOverlay) {

//                 menuOverlay.classList.remove("active");

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "true"
//             );

//             }

//             document.body.classList.remove("menu-open");

//         });

    // });


/* Close menu with Escape */

// document.addEventListener(
//     "keydown",
//     function (event) {

//         if (
//             event.key === "Escape" &&
//             menuOverlay
//         ) {

//             menuOverlay.classList.remove("active");

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "true"
//             );

//             document.body.classList.remove(
//                 "menu-open"
//             );

//         }

//     }
// );

/* =====================================================
   BIGSHOT GLOBAL MENU
===================================================== */

// menuButton = document.getElementById("menuButton");
// menuOverlay = document.getElementById("menuOverlay");

// if (menuButton && menuOverlay) {

//     menuButton.addEventListener("click", function () {

//         const isOpen =
//             menuOverlay.classList.contains("active");

//         if (isOpen) {

//             menuOverlay.classList.remove("active");

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "true"
//             );

//             document.body.classList.remove(
//                 "menu-open"
//             );

//             document.body.style.overflow = "";

//         } else {

//             menuOverlay.classList.add("active");

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "false"
//             );

//             document.body.classList.add(
//                 "menu-open"
//             );

//             document.body.style.overflow = "hidden";

//         }

//     });
// }


/* =====================================================
   CLOSE MENU WHEN LINK IS CLICKED
===================================================== */

// menuLinks =
//     document.querySelectorAll(
//         ".menu-content a, .menu-inner nav a"
//     );

// menuLinks.forEach(function (link) {

//     link.addEventListener("click", function () {

//         if (menuOverlay) {

//             menuOverlay.classList.remove(
//                 "active"
//             );

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "true"
//             );

//         }

//         document.body.classList.remove(
//             "menu-open"
//         );

//         document.body.style.overflow = "";

//     });

// });


/* =====================================================
   CLOSE MENU WITH ESCAPE
===================================================== */

// document.addEventListener(
//     "keydown",
//     function (event) {

//         if (
//             event.key === "Escape" &&
//             menuOverlay
//         ) {

//             menuOverlay.classList.remove(
//                 "active"
//             );

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "true"
//             );

//             document.body.classList.remove(
//                 "menu-open"
//             );

//             document.body.style.overflow = "";

//         }

//     }
// );

// const menuButton = document.getElementById("menuButton");
// const menuOverlay = document.getElementById("menuOverlay");
// const menuClose = document.getElementById("menuClose");


// // =========================
// // OPEN / CLOSE MENU
// // =========================

// if (menuButton && menuOverlay) {

//     menuButton.addEventListener("click", function () {

//         if (menuOverlay.classList.contains("active")) {

//             // CLOSE
//             menuOverlay.classList.remove("active");

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "true"
//             );

//             document.body.classList.remove("menu-open");

//             document.body.style.overflow = "";

//         } else {

//             // OPEN
//             menuOverlay.classList.add("active");

//             menuOverlay.setAttribute(
//                 "aria-hidden",
//                 "false"
//             );

//             document.body.classList.add("menu-open");

//             document.body.style.overflow = "hidden";
//         }

//     });

// }


// =========================
// CLOSE BUTTON
// =========================

// if (menuClose && menuOverlay) {

//     menuClose.addEventListener("click", function () {

//         menuOverlay.classList.remove("active");

//         menuOverlay.setAttribute(
//             "aria-hidden",
//             "true"
//         );

//         document.body.classList.remove("menu-open");

//         document.body.style.overflow = "";

//     });

// }

const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");


// =========================
// OPEN / CLOSE MENU
// =========================

if (menuButton && menuOverlay) {

    menuButton.addEventListener("click", function () {

        if (menuOverlay.classList.contains("active")) {

            // CLOSE
            menuOverlay.classList.remove("active");

            menuOverlay.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove("menu-open");

            document.body.style.overflow = "";

        } else {

            // OPEN
            menuOverlay.classList.add("active");

            menuOverlay.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add("menu-open");

            document.body.style.overflow = "hidden";
        }

    });

}


// =========================
// CLOSE BUTTON
// =========================

if (menuClose && menuOverlay) {

    menuClose.addEventListener("click", function () {

        menuOverlay.classList.remove("active");

        menuOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("menu-open");

        document.body.style.overflow = "";

    });

}


// =========================
// MENU LINKS
// =========================

const menuLinks =
    document.querySelectorAll(
        ".menu-content a"
    );


menuLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                menuOverlay.classList.remove(
                    "active"
                );

                menuOverlay.setAttribute(
                    "aria-hidden",
                    "true"
                );

                document.body.style.overflow =
                    "";

            }
        );

    }
);


/* =====================================================
   HOME MOUSE PARALLAX
===================================================== */

const homeHero =
    document.querySelector(".home-hero");

const heroContent =
    document.querySelector(".home-hero-content");

const vinylWrap =
    document.querySelector(".home-vinyl-wrap");

const floatingWords =
    document.querySelectorAll(".floating-word");


if (
    homeHero &&
    heroContent &&
    vinylWrap
) {

    homeHero.addEventListener(
        "mousemove",
        function (event) {

            /* Don't run this on touch-style screens */

            if (window.innerWidth <= 700) {
                return;
            }


            const x =
                (event.clientX /
                    window.innerWidth) - 0.5;


            const y =
                (event.clientY /
                    window.innerHeight) - 0.5;


            /* Main text moves slightly */

            heroContent.style.transform =
                `translate(${x * 8}px, ${y * 6}px)`;


            /* Vinyl moves more */

            vinylWrap.style.transform =
                `translate(
                    ${x * 18}px,
                    calc(-50% + ${y * 15}px)
                )`;


            /* Floating words move at different speeds */

            floatingWords.forEach(
                function (word, index) {

                    const strength =
                        (index + 1) * 5;

                    word.style.transform =
                        `translate(
                            ${x * strength}px,
                            ${y * strength}px
                        )`;

                }
            );

        }
    );


    homeHero.addEventListener(
        "mouseleave",
        function () {

            heroContent.style.transform =
                "translate(0, 0)";


            vinylWrap.style.transform =
                "translate(0, -50%)";


            floatingWords.forEach(
                function (word) {

                    word.style.transform =
                        "translate(0, 0)";

                }
            );

        }
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealSections =
    document.querySelectorAll(
        ".reveal-section"
    );


if (
    revealSections.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "home-visible"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    revealSections.forEach(
        function (section) {

            revealObserver.observe(section);

        }
    );

}


/* =====================================================
   POSTER PARALLAX
===================================================== */

const posterSection =
    document.querySelector(".home-poster");

const posterImage =
    document.querySelector(".home-poster-image");


if (
    posterSection &&
    posterImage
) {

    window.addEventListener(
        "scroll",
        function () {

            const rect =
                posterSection.getBoundingClientRect();

            const windowHeight =
                window.innerHeight;


            if (
                rect.bottom > 0 &&
                rect.top < windowHeight
            ) {

                const progress =
                    (windowHeight - rect.top) /
                    (windowHeight + rect.height);


                const movement =
                    (progress - 0.5) * 35;


                posterImage.style.transform =
                    `scale(1.05)
                     translateY(${movement}px)`;

            }

        }
    );

}


/* =====================================================
   PREVENT MOBILE PARALLAX JUMP
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth <= 700 &&
            heroContent &&
            vinylWrap
        ) {

            heroContent.style.transform =
                "translate(0, 0)";

            vinylWrap.style.transform =
                "translate(0, -50%)";

        }

    }
);

/* =========================================
   COFFEE PAGE MOTION
========================================= */

const coffeeMotion = document.querySelector(".coffee-motion");

if (coffeeMotion) {

    window.addEventListener("scroll", function () {

        const rect = coffeeMotion.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const progress =
            1 - (rect.top / windowHeight);

        const waveLines =
            document.querySelectorAll(".wave-line");

        waveLines.forEach(function (line, index) {

            const movement =
                (progress * (index + 1) * 12);

            line.style.marginLeft =
                movement + "px";

        });

    });

}

/* =====================================================
   BIGSHOT GLOBAL MENU
===================================================== */

// menuButton =
//     document.getElementById("menuButton");

// menuOverlay =
//     document.getElementById("menuOverlay");

// menuClose =
//     document.getElementById("menuClose");


// if (menuButton && menuOverlay) {

//     menuButton.addEventListener("click", function () {

//         menuOverlay.classList.add("active");

//         menuOverlay.setAttribute(
//             "aria-hidden",
//             "false"
//         );

//         document.body.classList.add("menu-open");

//     });

// }





/* =====================================================
   FLOATING PRODUCTS
===================================================== */

const floatingProducts =
    document.querySelectorAll(
        ".floating-product"
    );


if (floatingProducts.length) {

    window.addEventListener(
        "scroll",
        function () {

            const scrollPosition =
                window.scrollY;


            floatingProducts.forEach(
                function (product) {

                    const speed =
                        parseFloat(
                            product.dataset.speed
                        );


                    const movement =
                        scrollPosition * speed;


                    product.style.transform =
                        `translateY(${movement}px)`;

                }
            );

        }
    );

}


/* =====================================================
   BIGSHOT MERCHANDISE
===================================================== */


const merchProducts =
    document.querySelectorAll(".merch-product");


/* PRODUCT REVEAL */

if (
    merchProducts.length &&
    "IntersectionObserver" in window
) {

    const merchObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "merch-visible"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    merchProducts.forEach(function (product) {

        merchObserver.observe(product);

    });

}



/* IMAGE PARALLAX */

merchProducts.forEach(function (product) {

    const image =
        product.querySelector(
            ".merch-product-image img"
        );

    if (!image) return;


    product.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                product.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width;

            const y =
                (event.clientY - rect.top)
                / rect.height;


            const moveX =
                (x - 0.5) * 10;

            const moveY =
                (y - 0.5) * 10;


            image.style.transform =
                `scale(1.04)
                 translate(${moveX}px, ${moveY}px)`;

        }
    );


    product.addEventListener(
        "mouseleave",
        function () {

            image.style.transform =
                "";

        }
    );

});
