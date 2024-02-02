import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screen/home/HomeScreen';
import {DetailPokemon} from '../screen/detailPokemon/DetailPokemon';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

export const ContainerNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Pokedex',
          }}
        />
        <Stack.Screen
          name="DetailPokemon"
          component={DetailPokemon}
          options={{title: 'Detalle'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
