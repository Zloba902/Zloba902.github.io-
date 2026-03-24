// Функция часов
function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0') + ":" +
                 now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();


function DayOfWeek(){
    const now = new Date();
    const numDayOfWeek = now.getDay();
    let dayOfWeek = "";
    switch(numDayOfWeek) {
        case 0: dayOfWeek = "Воскрескренье";
         break;
        case 1: dayOfWeek = "Понедельник";
         break;
        case 2: dayOfWeek = "Вторник";
         break;
        case 3: dayOfWeek = "Среда";
         break;
        case 4: dayOfWeek = "Четверг";
         break;
        case 5: dayOfWeek = "Пятница";
         break;
        case 6: dayOfWeek = "Суббота";
         break;
    }
    return dayOfWeek;
}

function updateDate() {
    const now = new Date();
    const date = DayOfWeek() + "  | " +
                now.getDate().toString().padStart(2, '0') + "." +
                (now.getMonth() + 1).toString().padStart(2, '0') + "." +
                now.getFullYear().toString().padStart(2, '0');
    document.getElementById('date').textContent = date;
}
setInterval(updateDate, 60000);
updateDate();

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
});


var i = 0;
var txt = "";
var speed = 50;



async function typeWriter() {
  document.getElementById("search-input").placeholder = "";
    const response = await fetch('slova.json');
    const data = await response.json();
    
    const randomIndex = Math.floor(Math.random() * data.length);
    txt = data[randomIndex];
    write();
};
 + (Math.random() * 2 + Math.random())

function write (){
 if (i < txt.length) {
    document.getElementById("search-input").placeholder += txt.charAt(i);
    i++;
    setTimeout(write, 50);
  } else {
    i = 0;
  }
}
setInterval(typeWriter, 30000);
typeWriter();

