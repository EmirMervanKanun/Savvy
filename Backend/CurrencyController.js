class Currency {
  label;
  value;

  constructor(label, value) {
    this.label = label;
    this.value = value;
  }

  toJSON() {
    return {
      label: this.label,
      value: this.value
    };
  }

  static fromJSON(json) {
    return new Currency(json.label, json.value);
  }
}

export default Currency;
