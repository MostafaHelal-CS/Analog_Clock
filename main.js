let hour=document.querySelector(".hr-hand");
let minute=document.querySelector(".min-hand");
let second=document.querySelector(".sec-hand");

function setClock () {
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    let hourValue=(hours*30)+(minutes*6)/12;
    let minuteValue=minutes*6;
    let secondValue=seconds*6;

    hour.style.transform=`rotate(${hourValue}deg)`;
    minute.style.transform=`rotate(${minuteValue}deg)`;
    second.style.transform=`rotate(${secondValue}deg)`;

}

setInterval(setClock, 1000);