const count = document.querySelector(".count");
const minusBtn =document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const changeBy= document.querySelector(".changeBy");
const reset = document.querySelector(".reset");

minusBtn.addEventListener('click', ()=>{
const countValue = parseInt(count.innerText);
const changeValueBy = parseInt(changeBy.value);
count.innerText= countValue - changeValueBy;
});

plusBtn.addEventListener('click', ()=>{
const countValue = parseInt(count.innerText);
const changeValueBy = parseInt(changeBy.value);
count.innerText= countValue + changeValueBy;
});

reset.addEventListener('click', ()=>{
    count.innerText = 0;
    changeBy.value =1;
});
