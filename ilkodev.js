let myName =prompt("isminizi yazin: ")




const clock = document.querySelector('#myClock');
let seconds,minutes,hours,day

setInterval(() =>{
    showTime();
},1000)

function showTime(){
    let date = new Date();

    if(date.getSeconds() < 10){
        seconds = "0" + date.getSeconds();
    }else{
        seconds = date.getSeconds();
    }

    if(date.getMinutes() < 10){
        minutes = "0" + date.getMinutes();
    }else{
        minutes = date.getMinutes();
    }
    
    if(date.getHours() < 10){
        hours = "0" + date.getHours();
    }else{
        hours = date.getHours();
    }

    day = nowDay(date.getDay());

    clock.innerHTML = hours + ":" + minutes + ":" + seconds +" "+ day;
}


function nowDay(day){
    let nowDay;

    switch (day) {
        case 1:
        return nowDay = "Pazartesi";
        case 2:
        return nowDay = "Salı";
        case 3:
        return nowDay = "Çarşamba";
        case 4:
        return nowDay = "Perşembe";
        case 5:
        return nowDay = "Cuma";
        case 6:
        return nowDay = "Cumartesi";
        case 7:
        return nowDay = "Pazar";
        default:
            break;
    }
}