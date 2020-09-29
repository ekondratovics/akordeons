function accordize() {
    let heading = document.getElementsByClassName("heading")

    for (let i = 0; i<heading.length; i++) {
        heading[i].addEventListener("click", function() {
            for (let i2 of heading) { // šeit gan mēģināju arī for (let i2 = 0; i2<heading.length; i2++), bet īsti nesaprotu kāpēc nesanāca.
                if (i2 != this) {
                    i2.classList.remove("open");
                } else {
                    i2.classList.toggle("open");
                }
            }
        });
    }
}

accordize();