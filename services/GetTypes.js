//Selecionando elementos
const div = document.querySelector('div.types_display')

//Setando valores
const Types_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/"
const Index_Types = { normal: 1,fight: 2,flying: 3,poison: 4,ground: 5,rock: 6,bug: 7,ghost: 8,steel: 9,fire: 10,water: 11,grass: 12,electric: 13,psychc: 14,ice: 15,dragon: 16,dark: 17,}

//Função principal
export async function GetTypeImage(Pokemon_Types) {
    div.innerHTML = ''
    for (let i = 0; i < Pokemon_Types.length; i++) {
        div.innerHTML += `<img class="types_img" src="${Types_img}${Index_Types[Pokemon_Types[i].type.name]}.png" alt="img">`
    }
}