//Função que faz a requisição na API
export async function ApiRequest(pokemon_name_or_id) {
   const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name_or_id}`)
   if (resp.status !== 404 && resp.status === 200) {
        const result = await resp.json()
        return result
   } else {
        console.error('Nome Incorreto ou Erro de Conecção')
        return 'erro'
   }
 }