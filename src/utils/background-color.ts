export const hexToRgb = (color: string, transparency = 1) => {
  const rgbValues = Object.fromEntries(
    (
      (color.match(/^#?[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/) ? color : "000")
        .replace(/^#?(.*)$/, (_, hex) =>
          hex.length == 3 ? hex.replace(/./g, "$&$&") : hex,
        )
        .match(/../g) ?? []
    ).map((c, i) => ["rgb".charAt(i), parseInt("0x" + c)]),
  );

  return `rgb(${rgbValues.r} ${rgbValues.g} ${rgbValues.b} / ${transparency})`;
};

export const getGradientStyles = (color: string) => {
  return {
    "--background-start-rgb": hexToRgb(color, 0.05),
    "--background-middle-rgb": hexToRgb(color, 0.4),
    "--background-end-rgb": hexToRgb(color),
  };
};
