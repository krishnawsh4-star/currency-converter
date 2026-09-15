const getValue = document.querySelector(".submit");
const answer = document.querySelector(".answer");
const input = document.querySelector(".amount input");
const from = document.querySelector("#from");
const to = document.querySelector("#to");

getValue.addEventListener("click", async function() {
    const amount = Number(input.value)
    const response = await fetch(
    `https://api.frankfurter.dev/v2/rate/${from.value}/${to.value}`)
     
    const data = await response.json();
    const rate = data.rate;
    const convertedAmount = amount*rate;
    console.log(rate);

    answer.innerHTML = `${amount} ${from.value} in ${to.value} is = ${convertedAmount}`;
    });