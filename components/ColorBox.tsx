import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ColorBlockProps {
  text: String;
  hexColor: String;
}

const ColorBox = ({ text, hexColor }: ColorBlockProps): React.JSX.Element => {
  return (
    <View style={[styles.box, { backgroundColor: `${hexColor}` }]}>
      <Text style={styles.text}>
        {text} {hexColor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    color: '#ffff',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ColorBox;
