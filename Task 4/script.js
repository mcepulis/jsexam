/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

//!!! Jeigu langas be rezultato, atidaryti per "Live Server" !!!
const ENDPOINT = 'cars.json';
fetch ('cars.json')
.then(x => x.json())
.then(data => {

for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    let mainDIV = document.getElementById('output');
    let cars = document.createElement('div');
    cars.style.border = '15px solid green'
    cars.innerText += data[i].brand + " --> " + data[i].models;
    mainDIV.appendChild(cars); 
}
})
