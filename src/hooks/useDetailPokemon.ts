import {useState} from 'react';

import {GetDetailPokemonServices} from '../api/Pokemon.services';
import {DetailPokemonToUse} from '../models/PokemonDetail.model';

export const useDetailPokemon = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DetailPokemonToUse>({
    id: 0,
    name: '',
    order: 0,
    location_area_encounters: '',
    base_experience: 0,
    weight: 0,
    height: 0,
    image: '',
  });

  const get = async (urlDetail: string) => {
    try {
      setLoading(true);
      const dataResponse = await GetDetailPokemonServices(urlDetail);
      if (dataResponse) {
        setData({
          id: dataResponse.id,
          name: dataResponse.name,
          order: dataResponse.order,
          location_area_encounters: dataResponse.location_area_encounters,
          base_experience: dataResponse.base_experience,
          weight: dataResponse.weight,
          height: dataResponse.height,
          image: dataResponse.sprites.other?.home.front_default,
        });
      }
    } catch (error) {
      setError(error as string);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return {get, error, loading, data};
};
