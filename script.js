//Importa os modulos
import { ApiRequest } from "./services/ApiRequest.js";

//Valores fixos
const url_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

//Selecionando os Elementos HTML
const input = document.querySelector('input.input_search');
const BtnNext = document.querySelector('button.btn_next');
const BtnPrev = document.querySelector('button.btn_prev');
const form = document.querySelector('.form');
//Elementos de display
const display_img = document.querySelector('img.pokemon_image');
const display_id = document.querySelector('.pokemon_id');
const display_name = document.querySelector('.pokemon_name');

//Eventos
BtnNext.addEventListener('click', function(){SequentialShowPokemons('Next')});
BtnPrev.addEventListener('click', function(){SequentialShowPokemons('Prev')});
form.addEventListener('submit', function(event) {event.preventDefault();});
input.addEventListener('keydown', function(event) {if(event.key === 'Enter'){if(input.value !== ''){UpdateInfoPokemon()};};});
window.onload = function(){UpdateInfoPokemon(1)};

//Função para o input
async function UpdateInfoPokemon(Input) {
    display_name.innerHTML = 'Loading...';
    display_id.innerHTML = '0';
    //Faz requisição do modulo
    const Data = await ApiRequest(input.value.toLowerCase() || Input);

    //Codição que verifica que Data não veio com Not Found
    if (Data === 'Not Found') {
        display_name.innerHTML = 'Não Encontrado!';
    } else {
        display_id.innerHTML = Data.id;
        display_name.innerHTML = Data.name;
        display_img.src = `${url_img}${Data.id}.gif`;
        input.value = '';
    }
}
//Função para os botões
async function SequentialShowPokemons(btn) {
    ButtonCooldown()
    input.value = '';

    //Variaveis local
    let ID = display_id.textContent;

    //Condições
    if (btn === 'Next' && ID < 1025) {

        display_name.innerHTML = 'Loading...';
        ID++;
        const Data = await ApiRequest(ID);

        display_id.innerHTML = Data.id;
        display_name.innerHTML = Data.name;
        display_img.src = `${url_img}${Data.id}.gif`;

    } else if (btn === 'Prev' && ID > 1) {
        display_name.innerHTML = 'Loading...';
        ID--;
        const Data = await ApiRequest(ID);

        display_id.innerHTML = Data.id;
        display_name.innerHTML = Data.name;
        display_img.src = `${url_img}${Data.id}.gif`;
    } 
}

//função para desabilitar temporariamente o botão
 function ButtonCooldown() {

        BtnNext.disabled = true;
        BtnPrev.disabled = true;
        let cooldown = 0.5

        setTimeout(() => {
            BtnNext.disabled = false;
            BtnPrev.disabled = false;
        }, cooldown * 1000);
 }