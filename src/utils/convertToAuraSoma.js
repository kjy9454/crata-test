import { colors } from "../styles/colors";

const auraSomaMap = {
  3: { borderColor: colors["blue"], backgroundColor: colors["green"] },
  4: { borderColor: colors["yellow"], backgroundColor: colors["gold"] },
  5: { borderColor: colors["yellow"], backgroundColor: colors["red"] },
  6: { borderColor: colors["red"], backgroundColor: colors["red"] },
  7: { borderColor: colors["yellow"], backgroundColor: colors["green"] },
  8: { borderColor: colors["yellow"], backgroundColor: colors["blue"] },
  9: { borderColor: colors["turquoise"], backgroundColor: colors["green"] },
  10: { borderColor: colors["green"], backgroundColor: colors["green"] },
  11: { borderColor: colors["clear"], backgroundColor: colors["pink"] },
  12: { borderColor: colors["clear"], backgroundColor: colors["blue"] },
  13: { borderColor: colors["clear"], backgroundColor: colors["green"] },
  14: { borderColor: colors["clear"], backgroundColor: colors["gold"] },
  15: { borderColor: colors["clear"], backgroundColor: colors["violet"] },
  16: { borderColor: colors["violet"], backgroundColor: colors["violet"] },
  17: { borderColor: colors["green"], backgroundColor: colors["violet"] },
  18: { borderColor: colors["yellow"], backgroundColor: colors["violet"] },
  19: { borderColor: colors["red"], backgroundColor: colors["purple"] },
  20: { borderColor: colors["blue"], backgroundColor: colors["pink"] },
  21: { borderColor: colors["green"], backgroundColor: colors["pink"] },
  22: { borderColor: colors["yellow"], backgroundColor: colors["pink"] },
  23: { borderColor: colors["rosepink"], backgroundColor: colors["pink"] },
  24: { borderColor: colors["violet"], backgroundColor: colors["turquoise"] },
  25: { borderColor: colors["purple"], backgroundColor: colors["magenta"] },
  26: { borderColor: colors["orange"], backgroundColor: colors["orange"] },
  27: { borderColor: colors["red"], backgroundColor: colors["green"] },
  28: { borderColor: colors["green"], backgroundColor: colors["red"] },
  29: { borderColor: colors["red"], backgroundColor: colors["blue"] },
  30: { borderColor: colors["blue"], backgroundColor: colors["red"] },
  31: { borderColor: colors["green"], backgroundColor: colors["gold"] },
  32: { borderColor: colors["royalblue"], backgroundColor: colors["gold"] },
  33: {
    borderColor: colors["royalblue"],
    backgroundColor: colors["turquoise"],
  },
  34: { borderColor: colors["pink"], backgroundColor: colors["turquoise"] },
  35: { borderColor: colors["pink"], backgroundColor: colors["violet"] },
  36: { borderColor: colors["violet"], backgroundColor: colors["pink"] },
  37: { borderColor: colors["violet"], backgroundColor: colors["blue"] },
  38: { borderColor: colors["violet"], backgroundColor: colors["green"] },
  39: { borderColor: colors["violet"], backgroundColor: colors["gold"] },
  40: { borderColor: colors["red"], backgroundColor: colors["gold"] },
  41: { borderColor: colors["gold"], backgroundColor: colors["gold"] },
  42: { borderColor: colors["yellow"], backgroundColor: colors["yellow"] },
  43: {
    borderColor: colors["turquoise"],
    backgroundColor: colors["turquoise"],
  },
  44: { borderColor: colors["lilac"], backgroundColor: colors["paleblue"] },
  45: { borderColor: colors["turquoise"], backgroundColor: colors["magenta"] },
  46: { borderColor: colors["green"], backgroundColor: colors["magenta"] },
  47: { borderColor: colors["royalblue"], backgroundColor: colors["lemon"] },
  48: { borderColor: colors["violet"], backgroundColor: colors["clear"] },
  49: { borderColor: colors["turquoise"], backgroundColor: colors["violet"] },
};

export const convertDateToAuraSoma = (date) => {
  const auraSomaNum = date
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  return auraSomaMap[auraSomaNum];
};
