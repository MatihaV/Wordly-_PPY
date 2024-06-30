const API = "https://pokeapi.co/api/v2/pokemon/ditto"
let diccionario = ["MOUSE", "RIVER", "APPLE", "AGLYY", "LENNY", "PLATE"]
let random = Math.random()*diccionario.length
random = Math.floor(random)
let palabraSecreta = diccionario[random];

fetch(API)
.then((response)=>{
    response.json()
    .then((data)=>{
        palabraSecreta = data[0].toUpperCase()
})}).catch((e)=>{
    console.log("ERROR")
})

let oportunidades = 6

let button = document.getElementById("guess-button");
let input = document.getElementById("guess-input");
let grid = document.getElementById("grid");

button.addEventListener('click', intentar)

function intentar(){
    console.log(palabraSecreta)
    let intento = input.value.toUpperCase(palabraSecreta)
    console.log(intento)
    if (intento == palabraSecreta){
        gameOver("Ganaste!🥳🥳😍" + "<h2>¡¡¡FELICIDADES!!!</h2>")
    }
    let row = document.createElement("div")
    row.className = "row"
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        if(palabraSecreta [i] == intento [i]){
            letra.style.backgroundColor = "green"
        } else if(palabraSecreta.includes (intento[i])){
            letra.style.backgroundColor = "yellow"
        } else {
            letra.style.backgroundColor = "gray"
        }  
        row.appendChild(letra)
    }
    grid.appendChild(row)
    oportunidades--
    if(oportunidades == 0){
        gameOver("Perdiste!🥹🥹🥹" + "<h2>No siempre se pierde, reinicia el juego y vuelve a intentarlo</h2>")
    }
}
function gameOver(mensaje) {
    button.disabled = true;
    input.disabled = true;
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
}

