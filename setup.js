let canvasBoard = document.querySelector("canvas");
    // canvas default size is small.
    // canvasBoard.height = window.innerHeight;
    // canvasBoard.width = window.innerWidth;
    // or
    canvasBoard.height = 700;
    canvasBoard.width = 1600;

    // creating a tool by which we can draw in canvas
    let tool = canvasBoard.getContext("2d");
    let body = document.querySelector("body");
    
    // solving margin issue casue of icons in the board
    let extraTop = canvasBoard.getBoundingClientRect().top;
    