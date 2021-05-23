
let time;
let hourTime;
let minTime;
let secTime;
let hourRot;
let minRot;
let secRot;
let hourHand=document.querySelector(".hour");
let minHand=document.querySelector(".minute");
let secHand=document.querySelector(".second");
setInterval(() =>{
  time=new Date;
  hourTime=time.getHours();
  minTime=time.getMinutes();
  secTime=time.getSeconds();
  hourRot=30*hourTime+minTime/2;
  minRot=6*minTime;
  secRot=6*secTime;
  hourHand.style.transform=`rotate(${hourRot}deg)`;
  minHand.style.transform=`rotate(${minRot}deg)`;
  secHand.style.transform=`rotate(${secRot}deg)`;
},1000);
