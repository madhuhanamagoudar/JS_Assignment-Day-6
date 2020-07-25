user=prompt("What's your name");
document.write("Welcome "+user);
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

clock();

setInterval(clock,1000);

