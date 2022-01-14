let gtool = document.querySelector("#green");
    let btool = document.querySelector("#blue");
    let rtool = document.querySelector("#red");
    //default colour set
    tool.strokeStyle = "blue";
    
    let colour = "blue"

    gtool.addEventListener("click",
        function () {
            tool.strokeStyle = "green";
            colour = "green"
        })
    rtool.addEventListener("click",
        function () {
            tool.strokeStyle = "red";
            colour = "red"

        })
    btool.addEventListener("click",
        function () {
            tool.strokeStyle = "blue"
            colour ="blue"
        })