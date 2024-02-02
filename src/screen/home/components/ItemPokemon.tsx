import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDetailPokemon} from '../../../hooks/useDetailPokemon';

export const ItemPokemon = ({
  name,
  url,
  navigation,
}: {
  name: string;
  url: string;
  navigation: any;
}) => {
  const {error, loading, get, data} = useDetailPokemon();

  useEffect(() => {
    get(url);
  }, []);

  const onTap = () => {
    navigation.navigate('DetailPokemon', {
      detail: data,
    });
  };

  return (
    <TouchableOpacity onPress={() => onTap()} style={styles.content}>
      <View style={styles.img}>
        {loading ? (
          <ActivityIndicator size="small" color="#546599" />
        ) : data.image ? (
          <Image
            style={{height: '100%', width: '100%'}}
            source={{
              uri: data.image,
            }}
          />
        ) : null}
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 90,
    borderRadius: 10,
    backgroundColor: '#E5E5E7',
    marginBottom: 12,
    padding: 12,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    color: '#4D4D4E',
  },
});
