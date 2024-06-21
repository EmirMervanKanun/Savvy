class Currency {
    symbol;
    name;
    short;
  
    constructor(symbol, name, short) {
      this.symbol = symbol;
      this.name = name;
      this.short = short;
    }
  
    toJSON() {
      return {
        symbol: this.symbol,
        name: this.name,
        short: this.short
      };
    }
  
    static fromJSON(json) {
      return new Currency(json.symbol, json.name, json.short);
    }
  }
  
  export default Currency;
  