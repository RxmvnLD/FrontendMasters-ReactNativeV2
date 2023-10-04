/* eslint-disable react-hooks/exhaustive-deps */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ColorData, ColorPaletteParamList, RootStackParamList } from '../types';
import { COLORS } from '../utils/contants';
import AddPaletteItem from '../components/AddPaletteItem';

type Props = StackScreenProps<RootStackParamList, 'AddNewPalette'>;
const PaletteModal = ({ navigation }: Props) => {
  const [name, setName] = useState<string>('');
  const [selectedColors, setSelectedColors] = useState<ColorData[]>([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert("The name can't be empty");
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };
      navigation.navigate('Home', newColorPalette<ColorPaletteParamList>);
    }
  }, [name, selectedColors]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameLabel}>Name of your color palette</Text>
        <TextInput
          placeholder="Name"
          style={styles.name}
          value={name}
          onChangeText={setName}
        />
      </View>
      <FlatList
        data={COLORS}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }: { item: ColorData }) => (
          <AddPaletteItem
            data={item}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
          />
        )}
        style={styles.switchesContainer}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
        <View>
          <Text style={styles.submitText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
    margin: 10,
    marginBottom: 50,
  },
  nameLabel: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  name: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
  switchesContainer: {
    gap: 10,
  },
  submit: { backgroundColor: '#80bca3', borderRadius: 10, paddingVertical: 10 },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default PaletteModal;
