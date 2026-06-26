function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const time =
    `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerText =
    time;

    const days = [
        "SUN","MON","TUE",
        "WED","THU","FRI","SAT"
    ];

    const year = now.getFullYear();

    const month =
    String(now.getMonth() + 1).padStart(2,"0");

    const date =
    String(now.getDate()).padStart(2,"0");

    const day =
    days[now.getDay()];

    document.getElementById("date").innerText =
    `${year}-${month}-${date} ${day}`;
}

setInterval(updateClock,1000);

updateClock();