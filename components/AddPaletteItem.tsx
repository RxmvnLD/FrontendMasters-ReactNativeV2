/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { ColorData } from '../types';
import { StyleSheet, Switch, Text, View } from 'react-native';

interface AddPaletteItemProps {
  data: ColorData;
  selectedColors: ColorData[];
  setSelectedColors: React.Dispatch<React.SetStateAction<ColorData[]>>;
}

const AddPaletteItem = ({
  data,
  selectedColors,
  setSelectedColors,
}: AddPaletteItemProps) => {
  const handleValueChange = useCallback((val: boolean, color: ColorData) => {
    if (val === true) {
      setSelectedColors(colors => [...colors, color]);
    } else {
      setSelectedColors(colors =>
        colors.filter(
          selectedColor => color.colorName !== selectedColor.colorName,
        ),
      );
    }
  }, []);

  return (
    <View style={styles.colorContainer}>
      <Text>{data.colorName}</Text>
      <Switch
        value={
          !!selectedColors.find(color => color.colorName === data.colorName)
        }
        onValueChange={selected => {
          handleValueChange(selected, data);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default AddPaletteItem;
