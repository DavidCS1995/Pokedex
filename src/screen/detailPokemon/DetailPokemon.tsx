import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const DetailPokemon = ({route}: {route: any}) => {
  const {detail} = route.params;

  return (
    <View style={styles.content}>
      <View style={styles.contentImage}>
        <View style={styles.contentImage1}>
          <Image style={styles.img} source={{uri: detail.image}} />
        </View>
      </View>
      <View style={styles.detailStyle}>
        <Text style={styles.name}>{detail.name}</Text>
        <Text style={styles.text}>Numero: {detail.order}</Text>
        <Text style={styles.text}>Experiencia: {detail.base_experience}</Text>
        <Text style={styles.text}>Altura: {detail.height}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  detailStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: '#DCDCDF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  contentImage: {
    borderRadius: 220,
    height: 230,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDF',
    alignSelf: 'center',
    marginBottom: -60,
    zIndex: 1,
  },
  contentImage1: {
    borderRadius: 220,
    height: 220,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    height: '90%',
    width: '90%',
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    color: '#4D4D4E',
  },
  name: {
    marginTop: 50,
    fontSize: 40,
    color: '#4D4D4E',
  },
});
