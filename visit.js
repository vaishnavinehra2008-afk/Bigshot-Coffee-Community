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


// =========================
// ESCAPE
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            menuOverlay.classList.contains("active")
        ) {

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

    }
);


// =========================
// HERO LINE MOVEMENT
// =========================

const heroLines =
    document.querySelector(".hero-lines");


if (heroLines) {

    window.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 700) {
                return;
            }


            const x =
                (
                    event.clientX /
                    window.innerWidth
                ) - 0.5;


            const y =
                (
                    event.clientY /
                    window.innerHeight
                ) - 0.5;


            heroLines.style.transform =
                "translate(" +
                (x * 18) +
                "px, " +
                (y * 12) +
                "px)";

        }
    );

}


// =========================
// MAP PIN MOVEMENT
// =========================

const mapVisual =
    document.querySelector(".map-visual");

const mapPin =
    document.querySelector(".map-pin");


if (mapVisual && mapPin) {

    mapVisual.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 700) {
                return;
            }


            const rect =
                mapVisual.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) / rect.width - 0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) / rect.height - 0.5;


            mapPin.style.transform =
                "translate(" +
                (-50 + x * 8) +
                "%, " +
                (-50 + y * 8) +
                "%)";

        }
    );


    mapVisual.addEventListener(
        "mouseleave",
        function () {

            mapPin.style.transform =
                "translate(-50%, -50%)";

        }
    );

}