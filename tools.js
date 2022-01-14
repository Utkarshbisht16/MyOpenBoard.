let ix, iy, Fx, Fy;
    let pencilswitch = false;
    if(currtool == "eraser"){
        tool.lineWidth = erasersize;
    }

    body.addEventListener("mousedown",
        function (e) {
            ix = e.clientX - 4;
            iy = e.clientY - extraTop;
            if(currtool == "pencil" || currtool == "eraser"){
                pencilswitch = true;
            }
            

        })

    body.addEventListener("mouseup",
        function (e) {

            Fx = e.clientX - 5;
            Fy = e.clientY - extraTop + 4;
            let height = Fy - iy;
            let width = Fx - ix;
            if (currtool == "rect") {
                tool.strokeRect(ix, iy, width, height);
            } else if (currtool == "line") {
                tool.beginPath();
                tool.moveTo(ix, iy);
                tool.lineTo(Fx, Fy);
                tool.stroke();
            }else if(currtool == "pencil" || currtool == "eraser"){
                pencilswitch = false;
                tool.strokeStyle = colour;
            }
        })

        // for pencil
    body.addEventListener("mousemove",
        function (e) {
            if (pencilswitch == false) {
                return;
            }
            if(currtool == "eraser"){
                tool.strokeStyle = "white";
            }
            Fx = e.clientX - 5;
            Fy = e.clientY - extraTop + 4;

            tool.beginPath();
            tool.moveTo(ix, iy);
            tool.lineTo(Fx, Fy);
            tool.stroke();
            ix = Fx;
            iy = Fy;

        })