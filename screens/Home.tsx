/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  ColorData,
  HomeParamList,
  PalettesResponse,
  RootStackParamList,
} from '../types';
import {
  SOLARIZED,
  RAINBOW,
  FRONTEND_MASTERS,
  API_URL,
} from '../utils/contants';
import ColorPaletteButton from '../components/ColorPaletteButton';
import {
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

type Item = {
  paletteName: string;
  colors: ColorData[];
};
type RenderItemProps = {
  item: Item;
};

const COLOR_PALETTES: Item[] = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }: Props) => {
  const route = useRoute<RouteProp<HomeParamList, 'newColorPalette'>>();
  const [palettes, setPalettes] = useState<PalettesResponse[]>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleFetch = useCallback(async () => {
    try {
      const res = await fetch(API_URL),
        resPalettes = await res.json();
      setPalettes([...palettes, resPalettes]);
    } catch (error) {
      console.log(error);
    }
  }, [route]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetch();
    setIsRefreshing(false);
  }, []);

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', item);
        }}>
        <ColorPaletteButton data={item.colors} title={item.paletteName} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddNewPalette');
        }}>
        <View style={styles.addColor}>
          <Text style={styles.addColorText}>Add a color scheme</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.header}>Fetched list</Text>
      </View>
      <FlatList
        data={palettes}
        keyExtractor={item => item.paletteName}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
      <View>
        <Text style={styles.header}>Static list</Text>
      </View>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={item => item.paletteName}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginVertical: 10 },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  addColor: {
    backgroundColor: '#80bca3',
    borderRadius: 10,
    paddingVertical: 10,
  },
  addColorText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Home;
