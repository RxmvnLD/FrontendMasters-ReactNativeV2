import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ListColorBoxProps {
  colorName: string;
  hexCode: string;
}

const ListColorBox = ({ colorName, hexCode }: ListColorBoxProps) => {
  const bgColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[bgColor, styles.container]}>
      <Text style={[styles.innerText, textColor]}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
  },
  innerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ListColorBox;
