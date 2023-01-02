
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

document.getElementById("start").onclick = function () {

    document.getElementById('start').disabled = true;
    timer = true;
    stopwatch();

}

document.getElementById('stop').onclick = function () {

    document.getElementById('start').disabled = false;
    timer = false;

}

document.getElementById('reset').onclick = function () {

    document.getElementById('start').disabled = false;
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    // document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}

function stopwatch() {

    if (timer == true) {

        count++;

        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        // let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        // if (hr < 10) {
        //     hrString = '0' + hr;
        // }
        if (minString < 10) {
            minString = '0' + min;
        }
        if (secString < 10) {
            secString = '0' + sec;
        }
        if (countString < 10) {
            countString = '0' + count;
        }

        // document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout('stopwatch()', 10);
    }

}