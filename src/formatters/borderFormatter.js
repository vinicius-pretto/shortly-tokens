const _ = require("lodash");

const getBorderRadiusTokens = (frames) => {
  return frames
    .find((frame) => frame.name === "border-radius")
    .children.filter((frame) => frame.type === "RECTANGLE")
    .map((border) => {
      const unit = border.name === "border-radius-circle" ? "%" : "px";
      return {
        [border.name]: `${border.cornerRadius}${unit}`,
      };
    });
};

const getTokens = (data) => {
  let borderTokens = {};
  const frames = data.document.children[0].children;
  const borderRadiusTokens = getBorderRadiusTokens(frames);

  borderRadiusTokens.forEach((border) => {
    const key = Object.keys(border)[0];
    _.set(borderTokens, key, border[key]);
  });

  return borderTokens;
};

module.exports = {
  getTokens,
};
