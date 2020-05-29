const convertToRem = (pxUnit) => {
  const remUnit = pxUnit / 16;
  return `${remUnit}rem`;
};

module.exports = convertToRem;
