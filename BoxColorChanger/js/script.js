const container = document.getElementById('container');

container.addEventListener("dragstart", (e) =>{
    e.preventDefault();
})

const boxLeft = container.offsetLeft;
const boxTop = container.offsetTop;
const boxRight = container.offsetLeft + container.offsetWidth;
const boxBottom = container.offsetTop + container.
offsetHeight;

const boxes = document.getElementsByClassName('box');

let mouseEnterXposition;
let mouseEnterYposition;
let mouseLeaveXposition;
let mouseLeaveYposition;

let goingRight;
let goingDown;

let boxesOffSetTopArray = [];
let boxesOffSetLeftArray = [];

let minTopEnterValue = 9999;
let minLeftEnterValue = 9999;

let minLeftOutValue = 9999;
let minTopOutValue = 9999;


container.addEventListener("mousedown", (e) => {

    container.addEventListener("mouseover", mouseOverEvent, false);

    mouseEnterXposition = e.clientX;
    mouseEnterYposition = e.clientY;

 
    for (let i  = 0; i < boxes.length; i++){
        boxesOffSetLeftArray.push(boxes[i].offsetLeft);
    }
 
    

    for (let i = 0; i < boxesOffSetLeftArray.length; i++){
        if (mouseEnterXposition > boxesOffSetLeftArray[i]){
            if (minLeftEnterValue > Math.abs(mouseEnterXposition - boxesOffSetLeftArray[i])){
                minLeftEnterValue = boxesOffSetLeftArray[i];
            }
        }
    }

    
    for (let i  = 0; i < boxes.length; i++){
        boxesOffSetTopArray.push(boxes[i].offsetTop);
    }


    for (let i = 0; i < boxesOffSetTopArray.length; i++){
        if (mouseEnterYposition > boxesOffSetTopArray[i]){
            if (minTopEnterValue > Math.abs(mouseEnterYposition - boxesOffSetTopArray[i])){
                minTopEnterValue = boxesOffSetTopArray[i];
            }
        }
    }

    
})

document.addEventListener("mouseup", () => {
    for (let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "transparent";

    container.removeEventListener("mouseover",mouseOverEvent);
}});


function mouseOverEvent (e){
    mouseLeaveXposition = e.clientX;
    mouseLeaveYposition = e.clientY;

    if (mouseLeaveXposition > mouseEnterXposition){
        goingRight = true;
    }
    else{
        goingRight = false;
    }

    if (mouseLeaveYposition > mouseEnterYposition){
        goingDown = true;
    }
    else{
        goingDown = false;
    }


    for (let i = 0; i < boxesOffSetLeftArray.length; i++){
        if (mouseLeaveXposition > boxesOffSetLeftArray[i]){
            if (minLeftOutValue > Math.abs(mouseLeaveXposition - boxesOffSetLeftArray[i])){
                minLeftOutValue = boxesOffSetLeftArray[i];
            }
        }
    }


    for (let i = 0; i < boxesOffSetTopArray.length; i++){
        if (mouseLeaveYposition > boxesOffSetTopArray[i]){
            if (minTopOutValue > Math.abs(mouseLeaveYposition - boxesOffSetTopArray[i])){
                minTopOutValue = boxesOffSetTopArray[i];
            }
        }
    }

    
    for (let i = 0; i < boxes.length; i++){
        if (goingRight && goingDown){
          if (boxes[i].offsetTop >= minTopEnterValue){
            if (boxes[i].offsetLeft >= minLeftEnterValue){
                if (boxes[i].offsetTop < minTopOutValue + boxes[i].offsetHeight){
                    if (boxes[i].offsetLeft  <= minLeftOutValue){
                        boxes[i].style.backgroundColor = "#c4514f";
                        continue;
                    }
                }
            }
          }
          boxes[i].style.backgroundColor = "transparent";
        }
        else if (!goingRight && goingDown){
            if (boxes[i].offsetTop >= minTopEnterValue){
                if (boxes[i].offsetLeft <= minLeftEnterValue){
                    if (boxes[i].offsetTop < minTopOutValue + boxes[i].offsetHeight){
                        if (boxes[i].offsetLeft + boxes[i].offsetWidth > minLeftOutValue){
                            boxes[i].style.backgroundColor = "#c4514f";
                            continue;
                        }
                        
                    }
                }
            }
            boxes[i].style.backgroundColor = "transparent";
        }
        else if (goingRight && !goingDown){
            if (boxes[i].offsetTop <= minTopEnterValue){
                if (boxes[i].offsetLeft >= minLeftEnterValue){
                    if (boxes[i].offsetTop >= minTopOutValue){
                        if (boxes[i].offsetLeft <= minLeftOutValue){
                            boxes[i].style.backgroundColor = "#c4514f";
                            continue;
                        }
                        
                    }
                }
            }
            boxes[i].style.backgroundColor = "transparent";
        }
        else if (!goingRight && !goingDown){
            if (boxes[i].offsetTop <= minTopEnterValue){
                if (boxes[i].offsetLeft <= minLeftEnterValue){
                    if (boxes[i].offsetTop >= minTopOutValue){
                        if (boxes[i].offsetLeft + boxes[i].offsetWidth > minLeftOutValue){
                            boxes[i].style.backgroundColor = "#c4514f";
                            continue;
                        }
                    }
                }
            }
            boxes[i].style.backgroundColor = "transparent";

        }
    }
}