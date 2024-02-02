import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {ItemPokemon} from './components/ItemPokemon';
import {usePokemon} from '../../hooks/usePokemon';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const {error, loading, data, getPokemon} = usePokemon();
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <View style={styles.content}>
      <FlatList
        data={data.results}
        renderItem={({item}) => (
          <ItemPokemon
            navigation={navigation}
            name={item.name}
            url={item.url}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
});
