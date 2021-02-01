let sliderElement = document.querySelector('#pixelSlider');
let drawingColor = '#000000';
let clearButton = document.querySelector('#clearButton');
let colorPicker = document.querySelector('#colorPicker');
let eraserButton = document.querySelector('#eraserButton');
let drawing = false;
let drawingToggle = document.querySelector('#drawingToggle');

//Display actual size
let actualSizeElement = document.createElement('span');
document.querySelector('#sizeSettingRow').appendChild(actualSizeElement);
actualSizeElement.setAttribute('class','sizeChange');


function createGrid(width){
    document.querySelector('#sketchBox').style.gridTemplateColumns=`repeat(${width},${512/width}px)`;
    for(let i=0; i<(width**2); i++){
        let colorBox=document.createElement('span');
        colorBox.setAttribute('class', 'pixel');
        colorBox.addEventListener('click', togglePen);
        if(drawing){
            document.querySelectorAll('.pixel').forEach(element => 
                element.removeEventListener('mouseover', addDrawing));
            drawing=false;
            drawingToggle.style.color='red';
        }
        document.querySelector('#sketchBox').appendChild(colorBox);
    }
}

function changeGridSize() {
    document.querySelectorAll('.pixel').forEach(element => element.remove());
    createGrid(sliderElement.value);
}

function clearGrid(){
    document.querySelectorAll('.pixel').forEach(element => element.style.backgroundColor='white');
}
function togglePen(){
    if(!drawing){
        document.querySelectorAll('.pixel').forEach(element => element.addEventListener('mouseover', addDrawing));
        drawing=true;
        drawingToggle.innerHTML=' On';
        drawingToggle.style.color='green';
        console.log('on');
    }
    else if(drawing){
        document.querySelectorAll('.pixel').forEach(element => 
            element.removeEventListener('mouseover', addDrawing));
        drawing=false;
        drawingToggle.innerHTML=' Off';
        drawingToggle.style.color='red';
        console.log('off');
    }
}
function addDrawing(event){
    event.target.style.backgroundColor = drawingColor;
}
changeGridSize();
actualSizeElement.innerHTML =`${sliderElement.value}x${sliderElement.value}`;

sliderElement.addEventListener('change',changeGridSize);
sliderElement.addEventListener('input', ()=>actualSizeElement.innerHTML =`${sliderElement.value}x${sliderElement.value}`);
clearButton.addEventListener('click',clearGrid);
colorPicker.addEventListener('input',()=> drawingColor=colorPicker.value);
eraserButton.addEventListener('click',()=>{
    drawingColor='#FFFFFF';
    if(drawing){
        document.querySelectorAll('.pixel').forEach(element => 
            element.removeEventListener('mouseover', addDrawing),false);
        drawing=false;
    }
});

