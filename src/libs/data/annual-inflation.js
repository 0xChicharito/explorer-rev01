export default class AnnualInflation {
  constructor() {
    this.annualInflation = 0
  }

  init(element) {
    this.annualInflation = Number(element.annual_inflation)
    return this
  }

  apr(bondedToken) {
    return this.annualInflation / bondedToken
  }
}
