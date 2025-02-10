//Selecionando elementos
const input = document.querySelector('input.input_search');
const Button_Prev = document.querySelector('.btn_prev');
const Button_Next = document.querySelector('.btn_next');
const display = document.querySelector('.pokemon_image');
const PokemonName_display = document.querySelector('.pokemon_name')
const PokemonID_display = document.querySelector('.pokemon_id')
const image_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"

//Eventos
Button_Next.onclick = function() {GetInfoSequential('next')};
Button_Prev.onclick = function() {GetInfoSequential('prev')};
input.addEventListener('keydown', function(event) { if (event.key === "Enter") {GetInfoByInput()} })
window.onload = function(){display.src = `${image_url}${1}.gif`; }

//Declarando variaveis da Função abaixo
let pokemon_id = 1;
//Função
async function GetInfoSequential(Next_or_Prev) {
   
    //Condições
    if (Next_or_Prev === 'next') {
        //Variaveis da condição
        pokemon_id++;

        //Requisitando a API
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`)
        const resultado = await resposta.json()

        //Alterando HTML
        PokemonID_display.innerText = resultado.id
        PokemonName_display.innerText = resultado.name
        display.src = `${image_url}${pokemon_id}.gif`

    } else if (Next_or_Prev === 'prev') {
        //Variaveis da condição
        pokemon_id--;
        
        //Requisitando API
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`)
        const resultado = await resposta.json()

        //Alterando HTML
        PokemonID_display.innerText = resultado.id
        PokemonName_display.innerText = resultado.name
        display.src = `${image_url}${pokemon_id}.gif`

    } else {
        console.error(`Error. input does recognized: ${Next_or_Prev}`)
        return
    }     
}
async function GetInfoByInput() {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`)
    const resultado = await resposta.json()
    PokemonName_display.innerText = resultado.name
}