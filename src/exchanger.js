export class ExchangeRate {
  async getExchangeRates(baseCurrency, targetCurrency) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurrency}/${targetCurrency}`);
      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
        return jsonResponse;
      }
      return jsonResponse;
    } catch (error) {
      return error;
    }
  }
}


















// 