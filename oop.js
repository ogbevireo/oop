

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`
//   };

//   color.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   return color;
// }

// const firstColor = makeColor(220, 34, 96);
// firstColor.hex();
// firstColor.rgb();

// const secondColor = makeColor(20, 134, 196);
// secondColor.hex();
// secondColor.rgb();

// const thirdColor = makeColor(124, 8, 220);
// thirdColor.hex();
// thirdColor.rgb();
