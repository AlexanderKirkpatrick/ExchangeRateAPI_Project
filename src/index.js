import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {CurrencyCalculator} from './currencyCalculator';

function conversionDisplay(currencyExchanger, convertedAmount) {
  $('.base-currency-display').text(currencyExchanger.baseCurrency);
  $('.base-amount-display').text(currencyExchanger.baseAmount);
  $('.target-currency-display').text(currencyExchanger.targetCurrency);
  $('.exchange-rate-display').text(currencyExchanger.exchangeRate);
  $('.converted-currency').text(convertedAmount.toString());

  $('#error').hide();
  $('#result').show();
}

function errorDisplay(currencyExchanger) {
  $('#error').html(`<h3>Something has gone wrong! Error-type: ${currencyExchanger.error}`);
  $('#result').hide();
  $('#error').show();
}

function invalidSelectionDisplay(currencyExchanger) {
  $('#error').html(`<h3> ${currencyExchanger.targetCurrency} is not a valid selection! Please use ISO 4217 Codes Only!`);
  $('#result').hide();
  $('#error').show();
}