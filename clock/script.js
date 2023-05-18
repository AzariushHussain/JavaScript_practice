function clock(){
    const date = new Date();

    const hours = date.getHours() ;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours*30;
    const minute=minutes*6;
    const second=seconds*6;

document.getElementById("hour").style.transform=`rotate(${hour}deg)`;
document.getElementById("minute").style.transform=`rotate(${minute}deg)`;
document.getElementById("second").style.transform=`rotate(${second}deg)`;
}
setInterval(clock, 1000);