let cval = document.querySelector('#cin');
let fval = document.querySelector('#fin');
let submit = document.querySelector("#button");
let celRes = document.querySelector("#c-ans");
let submit1 = document.querySelector("#button1");
let farRes = document.querySelector("#f-ans");

submit.addEventListener('click', () => {
    let celcius = cval.value;
    let res = (celcius * 9/5 ) + 32
    celRes.innerHTML  =res +" °F";
})

submit1.addEventListener('click', () => {
    let farenheit = fval.value;
    let res = (farenheit - 32 ) * 5/9
    farRes.innerHTML  = (parseFloat(res).toFixed(2))+" °C";
})


