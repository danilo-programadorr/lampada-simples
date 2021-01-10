var ambiente =document.getElementById('ambiente');
var btn = document.getElementById('clicker');
var  lamp = document.getElementById('lamp');

btn.onclick = function(){
    if (btn.value === 'Ligar'){
        lamp.src ='./img/ligada.jpg';
        btn.value ='desligar';
        btn.innerHTML = 'desligar';
        
    }else{ 
          lamp.src = './img/desligada.jpg';
          btn.value = 'Ligar';
          btn.innerHTML = 'Ligar';
    }
}
function lampBroken(){
        lamp.src ='./img/quebrada.jpg';
}
function Ligar(){
    if (!islampBroken ()){
    lamp.src = './img/ligada.jpg';
}
}
function desligar(){
    if (!islampBroken ()){
    lamp.src ='./img/desligada.jpg';
}
}
function islampBroken (){
        return lamp.src.indexOf ('quebrada') > -1 
}

lamp.addEventListener('mouseleave', desligar);
lamp.addEventListener('mouseover', Ligar)
lamp.addEventListener('dblclick',lampBroken );







