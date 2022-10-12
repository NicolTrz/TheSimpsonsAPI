const URL= "https://thesimpsonsquoteapi.glitch.me/quotes";
const generate = document.getElementById("generate");
const image = document.getElementById("image");
const character = document.getElementById("character");
const description = document.getElementById("description");

generate.addEventListener("click", getApi);

function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        image.src = data[0].image
        character.textContent = data[0].character
        description.textContent = data[0].quote
    })
    // .then(function API(data) {
    //     image.src = data[0].image
    //     character.textContent = data[0].character
    //     description.textContent = data[0].quote
    // })
}