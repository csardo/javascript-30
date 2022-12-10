const displayTime = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');

let timeSet;
let intervalID;

function updateTime(e) {
    e.preventDefault();

    if (intervalID > 0) {
        clearInterval(intervalID);
    }

    timeSet = this.dataset.time;

    intervalID = setInterval(countDown, 1000);

    // need to invoke right away
    countDown();
    getEndTime(timeSet);
}

function countDown() {
    const mins = Math.floor(timeSet / 60);
    const remainderSeconds = timeSet % 60;

    const display = `${mins}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    
    displayTime.innerText = display;
    document.title = display;
    
    if (timeSet <= 0) {
        clearInterval(intervalID);
        intervalID = -1;
    }
    timeSet--;
}

function getEndTime() {
    const now = Date.now();
    const end = new Date(now + timeSet * 1000);
    
    const hour = end.getHours();
    const minutes = end.getMinutes();
    displayEndTime.innerText = `Be back at ${hour > 12 ? hour - 13 : hour}:${minutes}`;
}

const buttons = document.querySelectorAll('.timer__button');
buttons.forEach(b => b.addEventListener('click', updateTime));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    timeSet = this.minutes.value * 60;
    
    intervalID = setInterval(countDown, 1000);

    // need to invoke right away
    countDown();
    getEndTime(timeSet);
    this.reset();
});