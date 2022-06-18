import {ExchangeRate} from './exchanger';

export class CurrencyCalculator {
  constructor(baseCurrency, baseAmount, targetCurrency) {
    this.baseCurrency = baseCurrency;
    this.baseAmount = baseAmount;
    this.targetCurrency = targetCurrency;
    this.exchangeRate;
  }

  async getExchangeRate() {
    
    let response = await ExchangeRate.getExchangeRates(this.baseCurrency, this.targetCurrency);

    if (response.result === "success") {
      this.exchangeRate = response.conversion_rate;
    } else {
      this.error = response;
    }
  }
}