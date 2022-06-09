import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {CurrencyCalculator} from './currencyCalculator';

function conversionDisplay(currencyCalculator, convertedAmount) {
  $('.base-currency-display').text(currencyCalculator.baseCurrency);
  $('.base-amount-display').text(currencyCalculator.baseAmount);
  $('.target-currency-display').text(currencyCalculator.targetCurrency);
  $('#exchange-rate-display').text(currencyCalculator.exchangeRate);
  $('#converted-currency').text(convertedAmount.toString());

  $('#error').hide();
  $('#result').show();
}

function errorDisplay(currencyCalculator) {
  $('#error').html(`<h4>Something has gone wrong! Error-type: ${currencyCalculator.error}`);
  $('#result').hide();
  $('#error').show();
}

function invalidUrlDisplay() {
  $('#error').html(`<h4>Whoops! There may be an error with your API url or key.`);
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
    } else if (!convertedAmount && !currencyCalculator.error) {
      invalidUrlDisplay(currencyCalculator);
    } else {
      errorDisplay(currencyCalculator);
    }
  });
});