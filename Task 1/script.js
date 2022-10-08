/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector("form");
  form.addEventListener('submit', function(e) {
    e.preventDefault();
        const kgNumber = document.querySelector("input");
        document.getElementById("poundsId").innerHTML=kgNumber.value*2.2046;
        document.getElementById("gramsId").innerHTML=kgNumber.value/0.001;
        document.getElementById("ouncesId").innerHTML=kgNumber.value*35.274;
    }
  )
    let result = document.getElementById("submit-btn");
    result.addEventListener("keyup", function(event) {
    document.getElementById("submit-btn").click();
      }
    )




// let outputDIV = document.getElementById('output');
// outputDIV.innerText = "Father";
// let lbDiv = document.createElement('div');
// lbDiv.innerText = convertFromKg;
// outputDIV.appendChild(lbDiv);

// let kgValue = document.getElementById('search')
// // let lbValue = document.createElement('div');
// // let gValue = document.createElement('div');
// // let ozValue = document.createElement('div');

// let convertFromKg = () => {
//     let kg = kgValue.target.value
//     lbDiv = kg * 2.2046
//     // gValue = kg / 0.0010000
//     // ozValue = kg * 35.274
//   } 

// //   console.log(convertFromKg)

// console.log(lbDiv.addEventListener = ("submit-btn", convertFromKg))
// console.log(document.querySelector("form").addEventListener("submit", convertFromKg))

