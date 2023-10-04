import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ColorData } from '../types';

type Props = {
  title: string;
  data: ColorData[];
};

const ColorPaletteButton = ({ data, title }: Props) => {
  const renderItem = ({ item }: { item: ColorData }) => {
    const bgColor = {
      backgroundColor: item.hexCode,
    };
    return <View style={[bgColor, styles.colorBox]} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.hexCode}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  colorBox: { width: 50, height: 50, marginRight: 10 },
});
export default ColorPaletteButton;
