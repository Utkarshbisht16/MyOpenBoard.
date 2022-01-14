
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
            // tool.lineWidth = pencilSize;
        }
    })
eraser.addEventListener("click",
    function () {
        
        if (currtool == "eraser") { // 2nd click
            options[1].style.display = "flex";
        } else {
            currtool = "eraser";
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
            // eraser.style.border = "1px solid red
            // tool.lineWidth = eraserSize;
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
            // tool.lineWidth = rectSize;

        }
    })
line.addEventListener("click",
    function () {
        if (currtool == "line") { // 2nd click
            options[3].style.display = "flex";
        } else {
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
            // download.style.border = "1px solid red"
            currtool = "line";
            // tool.lineWidth = lineSize;
        }
    })



    // size change logic
    let pencilsize = 1;
    let erasersize = 2;
    let rectsize = 1;
    let linesize = 1;
    let sizebox = document.querySelectorAll(".size-box");
    // pencil
    
    sizebox[0].addEventListener("click",
    function(e){
        let elem = ["size1", "size2", "size3", "size4"];

        let allclasses = e.target.classList;
        console.log(allclasses)
        let class1 = allclasses[0];

        if(elem.includes(class1)){
            if(class1 == "size1"){
                pencilsize = 1;
            }else if(class1 == "size2"){
                pencilsize = 5;
            }
            else if(class1 == "size3"){
                pencilsize = 10;
            }
            else if(class1 == "size4"){
                pencilsize = 15;
            }
        }
        tool.lineWidth = pencilsize;
        
    })
    // eraser
    
    sizebox[1].addEventListener("click",
    function(e){
        let elem = ["size1", "size2", "size3", "size4"];

        let allclasses = e.target.classList;
        let class1 = allclasses[0];

        if(elem.includes(class1)){
            if(class1 == "size1"){
                erasersize = 2;
            }else if(class1 == "size2"){
                erasersize = 15;
            }
            else if(class1 == "size3"){
                erasersize = 25;
            }
            else if(class1 == "size4"){
                erasersize = 35;
            }
        }
        tool.lineWidth = erasersize;
    })
    //rect
    
    sizebox[2].addEventListener("click",
    function(e){
        let elem = ["size1", "size2", "size3", "size4"];

        let allclasses = e.target.classList;
        let class1 = allclasses[0];

        if(elem.includes(class1)){
            if(class1 == "size1"){
                rectsize = 1;
            }else if(class1 == "size2"){
                rectsize = 5;
            }
            else if(class1 == "size3"){
                rectsize = 10;
            }
            else if(class1 == "size4"){
                rectsize = 15;
            }
        }
        tool.lineWidth = rectsize;
    })
    //line
    
    sizebox[3].addEventListener("click",
    function(e){
        let elem = ["size1", "size2", "size3", "size4"];

        let allclasses = e.target.classList;
        let class1 = allclasses[0];

        if(elem.includes(class1)){
            if(class1 == "size1"){
                linesize = 1;
            }else if(class1 == "size2"){
                linesize = 5;
            }
            else if(class1 == "size3"){
                linesize = 10;
            }
            else if(class1 == "size4"){
                linesize = 15;
            }
        }
        tool.lineWidth = linesize;
    })
