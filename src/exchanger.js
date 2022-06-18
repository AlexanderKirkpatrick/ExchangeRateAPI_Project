export class ExchangeRate {
  static async getExchangeRates(baseCurrency, targetCurrency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurrency}/${targetCurrency}`);
      
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();      
    } catch(error) {
      return error.message;
    }
  }
}



















