import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {ContainerNavigation} from './navigator/NavigatorContainer';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ContainerNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
