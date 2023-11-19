class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    console.log(this)
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`
  }

  rgb() {
    return `rgb(${this.innerRGB()})`

  }
  rgba(a = 0.8) {
    return `rgba(${this.innerRGB()}, ${a})`
  }

  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}


