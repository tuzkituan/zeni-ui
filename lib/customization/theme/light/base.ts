export const Colors = {
  primary100: "#151522",
  primary90: "#232339",
  primary80: "#353455",
  primary70: "#464571",
  primary60: "#58578E",
  primary50: "#8281B8",
  primary40: "#9B9AC6",
  primary30: "#B4B3D4",
  primary20: "#CDCDE3",
  primary10: "#E1E1EE",
  primaryBase: "#6968AA",

  neutral100: "#040407",
  neutral90: "#1D1D20",
  neutral80: "#363639",
  neutral70: "#4F4F51",
  neutral60: "#68686A",
  neutral50: "#828283",
  neutral40: "#9B9B9C",
  neutral30: "#B4B4B5",
  neutral20: "#CDCDCD",
  neutral10: "#E6E6E6",
  neutral5: "#FDFDFD",

  success100: "#15221A",
  success90: "#23392C",
  success80: "#345642",
  success70: "#457257",
  success60: "#578E6D",
  successBase: "#68AB83",
  success50: "#81B998",
  success40: "#9AC7AC",
  success30: "#B3D5C1",
  success20: "#CDE3D6",
  success10: "#E1EEE6",

  warning100: "#222015",
  warning90: "#393523",
  warning80: "#565034",
  warning70: "#726A45",
  warning60: "#8E8457",
  warningBase: "#AB9F68",
  warning50: "#B9AF81",
  warning40: "#C7BF9A",
  warning30: "#D5CFB4",
  warning20: "#E3DFCD",
  warning10: "#EEECE1",

  error100: "#221615",
  error90: "#392423",
  error80: "#563634",
  error70: "#724845",
  error60: "#8E5A57",
  errorBase: "#AB6C68",
  error50: "#B98481",
  error40: "#C79D9A",
  error30: "#D5B6B4",
  error20: "#E3CECD",
  error10: "#EEE2E1",

  info100: "#131B22",
  info90: "#202D39",
  info80: "#304356",
  info70: "#405972",
  info60: "#50708E",
  infoBase: "#6086AB",
  info50: "#7B9AB9",
  info40: "#7B9AB9",
  info30: "#B0C3D5",
  info20: "#CAD7E3",
  info10: "#DFE7EE",
};

export const Border = {
  borderRadiusBase: "8px",
  borderColorBase: Colors.neutral10,
};

export const Input = {
  inputHeightXs: "24px",
  inputHeightSm: "32px",
  inputHeightMd: "40px",
  inputHeightLg: "48px",

  inputPaddingHorXs: "24px",
  inputPaddingHorSm: "32px",
  inputPaddingHorMd: "40px",
  inputPaddingHorLg: "48px",
};

export const Effects = {
  shadowBase: "0px 6px 18px 0px rgba(4, 4, 7, 0.05)",
};

export default {
  ...Colors,
  ...Effects,
  ...Border,
  ...Input,
};
