/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let result = document.getElementById("btn__state")
let button = document.getElementById("btn__element"),
count = 0;
button.onclick = function() {
  count += 1;
  result.innerHTML = " " + count;
};