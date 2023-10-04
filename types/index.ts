export type ColorData = {
  colorName: string;
  hexCode: string;
};
export type ColorPaletteParamList = {
  paletteName: string;
  colors: ColorData[];
};
export type ColorPalette = { paletteName: string; colors: ColorData[] };
export type HomeParamList = {
  newColorPalette: ColorPalette;
};

export type RootStackParamList = {
  Main: undefined;
  Home: HomeParamList;
  ColorPalette: ColorPaletteParamList;
  AddNewPalette: undefined;
};

export interface PalettesResponse extends ColorPaletteParamList {
  id: number;
}
