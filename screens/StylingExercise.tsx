import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

function StylingExercise(): React.JSX.Element {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Here are some boxes of different colours</Text>
      <ColorBox text={'Cyan'} hexColor={'#2aa198'} />
      <ColorBox text={'Blue'} hexColor={'#268bd2'} />
      <ColorBox text={'Magenta'} hexColor={'#d33682'} />
      <ColorBox text={'Orange'} hexColor={'#cb4b16'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default StylingExercise;
