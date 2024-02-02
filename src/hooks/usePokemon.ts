import {useState} from 'react';

import {ResponsePokemon} from '../models/Pokemos.model';
import {GetPokemonServices} from '../api/Pokemon.services';
import {dataPokemonMock} from '../dummi/dataPokemon.mock';

export const usePokemon = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ResponsePokemon>({
    count: 0,
    next: '',
    previous: '',
    results: [],
  });

  const getPokemon = async () => {
    try {
      setLoading(true);
      const dataResponse = await GetPokemonServices();
      if (dataResponse) {
        setData(dataResponse);
      }
    } catch (error) {
      setError(error as string);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return {getPokemon, error, loading, data};
};
