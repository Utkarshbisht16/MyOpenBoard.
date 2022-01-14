
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");
let currtool = "pencil";

// identify 2nd time click
pencil.addEventListener("click",
    function () {
        if (currtool == "pencil") { // 2nd click
            options[0].style.display = "flex";
        } else {
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
            // pencil.style.border = "1px solid red"
            currtool = "pencil";
        }
    })
eraser.addEventListener("click",
    function () {
        if (currtool == "eraser") { // 2nd click
            options[1].style.display = "flex";
        } else {
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
            // eraser.style.border = "1px solid red"
            currtool = "eraser";

        }
    })
rect.addEventListener("click",
    function () {
        if (currtool == "rect") { // 2nd click
            options[2].style.display = "flex";
        } else {
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
            // download.style.border = "1px solid red"
            currtool = "rect";

        }
    })
line.addEventListener("click",
    function () {
        if (currtool == "line") { // 2nd click
            options[2].style.display = "flex";
        } else {
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
            // download.style.border = "1px solid red"
            currtool = "line";

        }
    })
