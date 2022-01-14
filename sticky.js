    let button = document.querySelector("#stickyTool");
    //let body = document.querySelector("body");
    button.addEventListener("click", // when clicked build sticky.
    function(e){ 
        //building body of sticky
        let sticky = document.createElement("div");
        sticky.setAttribute("class", "sticky");
        sticky.innerHTML = `<div class="navbar">
            <div class="minimise"></div>
            <div class="close"></div>
        </div>
        <textarea name="" class="textarea"></textarea>`
        // showing on screen
        body.append(sticky);

        // minimise code
        let minimise = document.querySelector(".minimise");
        let textarea = document.querySelector(".textarea");
        let status = false; // not minimised
        minimise.addEventListener("click",
        function(e){
            if(status == false){
                textarea.style.display = "none";
                status = true;
            }else{
                textarea.style.display = "flex";
                status = false;
            }
        })

        // close code
        let close = document.querySelector(".close");
        close.addEventListener("click",
        function(e){
            sticky.remove();
        })
    })