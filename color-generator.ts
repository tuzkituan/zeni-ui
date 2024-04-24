import chroma from "chroma-js";

export const getColor = (color: string | number | chroma.Color) =>
  chroma(color);

export const getPalette = (color: string | chroma.Color) => {
  const colors = chroma.scale(["white", color, "black"]);
  const palette = [];

  // Create 50
  palette.push(colors(0.5).rgb().join(" "));

  // Create 100-900
  for (let i = 0.1; i < 0.9; i += 0.1) {
    palette.push(colors(i).rgb().join(" "));
  }
  return palette;
};

export const isValid = (color: any) => chroma.valid(color);

export const getCodeString = (color: string | chroma.Color) => {
  const palette = getPalette(color);
  return {
    50: `rgb(${palette[0]})`,
    100: `rgb(${palette[1]})`,
    200: `rgb(${palette[2]})`,
    300: `rgb(${palette[3]})`,
    400: `rgb(${palette[4]})`,
    500: `rgb(${palette[5]})`,
    600: `rgb(${palette[6]})`,
    700: `rgb(${palette[7]})`,
    800: `rgb(${palette[8]})`,
    900: `rgb(${palette[9]})`,
  };
};
