function fillingTheBox(value){
    for(let i=0; i<(value**2); i++){
        let colorBox=document.createElement('span');
        colorBox.style.height=`${512/value}px`;
        colorBox.style.width=`${512/value}px`;
        colorBox.setAttribute('class', 'pixel');
        colorBox.addEventListener('mouseover', (event)=> event.target.style.backgroundColor = 'black');
        document.querySelector('#sketchBox').appendChild(colorBox);
    }
    
}
function setColor(pixel){
    pixel.style.backgroundColor='black';
}