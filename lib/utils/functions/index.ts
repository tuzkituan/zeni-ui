export const getLuminance = (rgb: string) => {
  const [r, g, b] = rgb.slice(4, -1).split(", ").map(Number);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance;
};
