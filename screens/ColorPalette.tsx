import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListColorBox from '../components/ListColorBox';
import { ColorData, ColorPaletteParamList } from '../types';
import { RouteProp, useRoute } from '@react-navigation/native';

const Header = () => {
  const route = useRoute<RouteProp<ParamList, 'ColorPalette'>>();
  const PALETTE_NAME = route.params.paletteName;

  return (
    <View>
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>
        {PALETTE_NAME}
      </Text>
    </View>
  );
};

type ParamList = {
  ColorPalette: ColorPaletteParamList;
};
const ColorPalette = () => {
  const route = useRoute<RouteProp<ParamList, 'ColorPalette'>>();
  const COLORS = route.params.colors;

  const renderItem = ({ item }: { item: ColorData }) => {
    return <ListColorBox colorName={item.colorName} hexCode={item.hexCode} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={COLORS}
      renderItem={renderItem}
      keyExtractor={item => item.hexCode}
      ListHeaderComponent={Header}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ColorPalette;
