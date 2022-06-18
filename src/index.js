import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {CurrencyCalculator} from './currencyCalculator';



function conversionDisplay(currencyCalculator, convertedAmount) {
  $('.base-currency-display').text(currencyCalculator.baseCurrency.toUpperCase());
  $('.base-amount-display').text(currencyCalculator.baseAmount);
  $('.target-currency-display').text(currencyCalculator.targetCurrency.toUpperCase());
  $('#exchange-rate-display').text(currencyCalculator.exchangeRate);
  $('#converted-currency').text(convertedAmount.toString());

  $('#error').hide();
  $('#result').show();
}

function errorDisplay(error) {
  $('#error').html(`<h4>Something has gone wrong! Please make sure to enter correct API URL, API key, and  use up to date 4217 codes! Error: ${error.error}`);
  $('#result').hide();
  $('#error').show();
}

$(document).ready(function() {
  let currencyCalculator;

  $('#exchanger').submit(async function(event){
    event.preventDefault();

    const baseCurrency = $('#base-currency').val();
    const baseAmount = parseInt($('#base-amount').val());
    const targetCurrency = $('#target-currency').val();

    currencyCalculator = new CurrencyCalculator(baseCurrency, baseAmount, targetCurrency);

    await currencyCalculator.getExchangeRate();
    const convertedAmount = currencyCalculator.exchangeRate * currencyCalculator.baseAmount;

    if (!currencyCalculator.error && convertedAmount) {
      conversionDisplay(currencyCalculator, convertedAmount);
    } else {
      errorDisplay(currencyCalculator);
    }
  });
});