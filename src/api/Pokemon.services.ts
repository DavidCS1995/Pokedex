import {ResponsePokemon} from '../models/Pokemos.model';
import {DetailPokemon} from '../models/PokemonDetail.model';

async function GetPokemonServices() {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"';
  try {
    const response = await fetch(API_URL);
    const data: ResponsePokemon = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function GetDetailPokemonServices(url: string) {
  try {
    const response = await fetch(url);
    const dataDetail: DetailPokemon = await response.json();
    return dataDetail;
  } catch (error) {
    throw error;
  }
}

export {GetPokemonServices, GetDetailPokemonServices};
