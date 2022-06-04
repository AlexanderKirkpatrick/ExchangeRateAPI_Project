import {ExchangeRate} from './exchanger';

export class CurrencyCalculator {
  constructor(baseCurrency, baseAmount, targetCurrency) {
    this.baseCurrency = baseCurrency;
    this.baseAmount = baseAmount;
    this.targetCurrency = targetCurrency;
    this.exchangeRate;
  }

  async getExchangeRate() {
    let rateExchanger = new ExchangeRate();
    let response = await rateExchanger.getExchangeRates(this.baseCurrency);

    if (response.result === "success") {
      this.exchangeRate = response.conversion_rates[this.targetCurrency];
    } else {
      this.error = response["error-type"];
    }
  }
}