//Importa os modulos
import {ApiRequest} from "./services/ApiRequest.js";
import {Render} from "./services/RenderResults.js";

//Selecionando os Elementos HTML
const input = document.querySelector('input.input_search');
const BtnNext = document.querySelector('button.btn_next');
const BtnPrev = document.querySelector('button.btn_prev');
const form = document.querySelector('.form');

//Eventos
BtnNext.addEventListener('click', function(){ButtonsInfos('Next')});
BtnPrev.addEventListener('click', function(){ButtonsInfos('Prev')});
form.addEventListener('submit', function(event) {event.preventDefault();});
input.addEventListener('keydown', function(event) {if(event.key === 'Enter'){if(input.value !== ''){InputInfos()};};});
window.onload = function(){InputInfos(1)};

//Variaveis Global
let ID


//Função para o input
async function InputInfos(Input) {
    //Exibe uma mensagem de carregamento
    Render();
    
    //Faz requisição no modulo
    const Data = await ApiRequest(input.value.toLowerCase() || Input);
    ID = Data.id || 0;
    
    //Chama a função para exibir os valores
    Render(Data);
}
//Função para os botões
async function ButtonsInfos(btn) {
    ButtonCooldown();
    Render();

    //Condições
    if (btn === 'Next' && ID < 1025) {
        ID++;
    } else if (btn === 'Prev' && ID > 1) {
        ID--;
    } 
    const Data = await ApiRequest(ID);
    Render(Data);
}

//função para desabilitar temporariamente o botão para evitar bugs
 function ButtonCooldown() {

        BtnNext.disabled = true;
        BtnPrev.disabled = true;
        const cooldown = 0.5

        setTimeout(() => {
            BtnNext.disabled = false;
            BtnPrev.disabled = false;
        }, cooldown * 1000);
 }