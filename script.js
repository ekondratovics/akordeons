function accordize() {
    let heading = document.getElementsByClassName("heading")

    for (let i = 0; i < heading.length; i++) {
        heading[i].addEventListener("click", function () {

            for (let i2 = 0; i2 < heading.length; i2++) {
                if (heading[i2] !== this) {
                    heading[i2].classList.remove("open");
                } else {
                    heading[i2].classList.toggle("open");
                }
            }
        });
    }
}

accordize();