let gtool = document.querySelector("#green");
    let btool = document.querySelector("#blue");
    let rtool = document.querySelector("#red");


    gtool.addEventListener("click",
        function () {
            tool.strokeStyle = "green";
        })
    rtool.addEventListener("click",
        function () {
            tool.strokeStyle = "red";

        })
    btool.addEventListener("click",
        function () {
            tool.strokeStyle = "blue"
        })