let container = document.querySelector('.container');
let btn = document.getElementById('spin');

btn.onclick = function bnt(){
    let number = Math.ceil(Math.random()*40000);

    container.style.transform = "rotate(" + number + "deg)"
    
   
}
console.log(number)
