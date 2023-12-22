const month = document.getElementById("month");
const day_name = document.getElementById("day-name");
const day_number = document.getElementById("day-number");
const year = document.getElementById("year");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


const d = new Date();
console.log(d)
const week = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Thursday", "Friday", "Saturday"];
const monthList = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const getDayName = week[d.getDay() - 1]; //  gün ismi 
const getDayNumber = d.getDate(); // gün no
const getMonth = monthList[d.getMonth()]; // ay ismi
const getYear = d.getFullYear();
let getHours = d.getHours();
let getMinutes = d.getMinutes();
let getSeconds = d.getSeconds();


month.textContent = `${getMonth}`;
day_name.textContent = `${getDayName}`;
day_number.textContent = `${getDayNumber}`;
year.textContent = `${getYear}`;
if (getHours < 10) {
    hour.textContent = `0${getHours}`;
}
else {
    hour.textContent = `${getHours}`;
}
if (getMinutes < 10) {
    minute.textContent = `0${getMinutes}`;
}
else {
    minute.textContent = `${getMinutes}`;
}
if (getSeconds < 10) {
    second.textContent = `0${getSeconds}`;
}
else {
    second.textContent = `${getSeconds}`;
}


setInterval(() => {
    const d = new Date();
    getHours = d.getHours();
    getMinutes = d.getMinutes();
    getSeconds = d.getSeconds();

    if (getHours < 10) {
        hour.textContent = `0${getHours}`;
    }
    else {
        hour.textContent = `${getHours}`;
    }
    if (getMinutes < 10) {
        minute.textContent = `0${getMinutes}`;
    }
    else {
        minute.textContent = `${getMinutes}`;
    }
    if (getSeconds < 10) {
        second.textContent = `0${getSeconds}`;
    }
    else {
        second.textContent = `${getSeconds}`;
    }

}, 1000);

