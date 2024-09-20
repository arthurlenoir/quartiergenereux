export const withZeroPrefix = (str: string) => {
  return `${Array.from(Array(5 - str.length)).join("0")}${str}`;
};
