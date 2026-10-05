/* =====================================================
   BIGSHOT COMMUNITY
   FRONTEND JAVASCRIPT
===================================================== */


/* =========================
   PHOTO PREVIEW
========================= */

const photoInput =
    document.getElementById("visitorPhoto");

const photoPreview =
    document.getElementById("photoPreview");


if (photoInput && photoPreview) {

    photoInput.addEventListener(
        "change",
        function () {

            photoPreview.innerHTML = "";


            const file =
                this.files[0];


            if (!file) {
                return;
            }


            if (!file.type.startsWith("image/")) {

                photoPreview.innerHTML =
                    "<p>Please select an image.</p>";

                return;
            }


            const image =
                document.createElement("img");


            image.src =
                URL.createObjectURL(file);


            image.alt =
                "Selected BIGSHOT community photo";


            photoPreview.appendChild(image);

        }
    );

}



/* =========================
   FORM SUBMIT
========================= */

const communityForm =
    document.getElementById("communityForm");

const communitySuccess =
    document.getElementById("communitySuccess");


if (communityForm) {

    communityForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "visitorName"
                ).value.trim();


            const message =
                document.getElementById(
                    "visitorMessage"
                ).value.trim();


            if (!name || !message) {
                return;
            }


            /*
                FRONTEND ONLY

                Later Firebase will be connected here.
            */


            if (communitySuccess) {

                communitySuccess.classList.add(
                    "show"
                );

            }


            communityForm.reset();


            if (photoPreview) {

                photoPreview.innerHTML = "";

            }


            setTimeout(
                function () {

                    if (communitySuccess) {

                        communitySuccess.classList.remove(
                            "show"
                        );

                    }

                },
                5000
            );

        }
    );

}