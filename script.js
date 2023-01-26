const tips = document.querySelectorAll(".tips");
let peopleNumber = document.querySelector("#people-number");
const p = document.querySelector(".p");
let tip = 0;
const tipAmountH1 = document.querySelector(".tip-amount h1");
const totaltH1 = document.querySelector(".total h1");
const resetEl = document.querySelector(".reset");
let bill = document.querySelector("#bill");

peopleNumber.addEventListener("input", function () {
  if (Number(peopleNumber.value) === 0) {
    peopleNumber.classList.add("zero");
    p.classList.remove("display");
  } else {
    // Adding and removing classes when !0
    peopleNumber.classList.remove("zero");
    p.classList.add("display");

    // Calculating Bill
    let bill = document.querySelector("#bill").value;
    let tipAmount = (tip / 100) * bill;
    let tipAmountPerson = tipAmount / peopleNumber.value;
    tipAmountH1.textContent = `$${Math.round(tipAmountPerson * 100) / 100}`;
    totaltH1.textContent = `$${Math.round(tipAmount * 100) / 100}`;
  }
});
for (let i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", function () {
    for (let j = 0; j < tips.length; j++) {
      if (tips[j] === tips[i]) {
        tip = tips[j].textContent;
        // Slice last charachter from string
        tip = tip.slice(0, -1);

        tips[j].classList.add("clicked");
      } else {
        tips[j].classList.remove("clicked");
      }
    }
  });
}
resetEl.addEventListener("click", function () {
  tip = 0;
  tipAmount = 0;
  tipAmountPerson = 0;
  tipAmountH1.textContent = "$0.00";
  totaltH1.textContent = "$0.00";
  peopleNumber.value = 0;
  bill.value = 0;
  for (let i = 0; i < tips.length; i++) {
    tips[i].classList.remove("clicked");
  }
});
