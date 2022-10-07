/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
// const ENDPOINT = 'https://api.publicapis.org/entries';
document.getElementById('btn').addEventListener('click', function () {
    fetch(ENDPOINT)
    .then(x => x.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].avatar_url)
            document.getElementById('message').innerHTML = ""
            document.getElementById('output').style.color = '#d00'
            document.getElementById('output').innerHTML += data[i].login + " --> " + data[i].avatar_url + "<br>"
            console.log(data[i])
        }

    })
  
})