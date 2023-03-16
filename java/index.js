


// var a = Number(prompt(`raqam kiriting`))
// var b = Number(prompt(`ikkinchi raqam kiriting`))

// function value(x, y){

//     if (x > y) {
//         return x
//     }

//     else {
//         return y
//     }
// }
// var result = value(a, b);
// console.log(result);


// var temperature = Number(prompt(`Havo haroratini kiriting`))
// var gym = confirm(`Zal ochiqmi? HA-OK YO'Q-CANCEL`)

// var ruxsat = `Zalga chiqaver`
// var Yoq = `Zalga chiqma`
// function allowance(temperature, gym) {
//     if (temperature > 5 &&  temperature < 45) {
//         return ruxsat; 
//     }

//     else if( gym === true) {
//         return ruxsat; 
//     }

//     else {
//         return Yoq;
//     }
// }
// var result = allowance(temperature, gym);
// console.log(result)

// var onlik = length/10
// var birlik = legnth%10

// var sec = Number(prompt(`soniya kiriting`))
// var secund = sec%60
// var min = (sec%3600 - sec%60) /60
// var hour = (sec - sec%3600)/3600
// function answer() {
//     return hour + ` soat ` + min + ` minut ` + secund + ` sekund `
// }

// var result = answer()
// console.log(result)


var sec = Number(prompt(`Bu dastur kiritilgan soniyalarni sizga necha soat, daqiqa va soniyalardan iboratligini ko'rsatadi.
Tekshirib ko'rish uchun istalgan soniyani kiriting va "OK "ni bosing.
Soniyani kiriting: `));
var secund = sec%60
var min = (sec%3600 - sec%60) /60
var hour = (sec - sec%3600)/3600



function calculate() {
    return hour + ` soat ` + min + ` minut ` + secund + ` sekund `
}
var elResult = document.querySelector(`.title`);
var result = calculate()
elResult.textContent = result,value;



