//Importando Modulos
import {GetTypeImage} from "./GetTypes.js";

//Selecionando Elementos HTML
const input = document.querySelector('input.input_search');
//Elementos Display
const display_img = document.querySelector('img.pokemon_image');
const display_id = document.querySelector('.pokemon_id');
const display_name = document.querySelector('.pokemon_name');

//Valores Fixos
const url_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

//Função para exibir os valores
export function Render(Data) {

    if (Data === 'erro') {
    display_name.innerHTML = 'Não encontrado!:C';
    display_id.innerHTML = '0';
    }
    else if (!Data) {
        display_name.innerHTML = 'Carregando!...';
        display_id.innerHTML = '0';
        return
    } else if (Data) {
        GetTypeImage(Data.types)
        display_id.innerHTML = Data.id;
        display_name.innerHTML = Data.name;
        display_img.src = `${url_img}${Data.id}.gif`;
    }
    input.value = '';
}