// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var apiEndpoint = 'http://json-server.devpointlabs.com/api/v1/'

var currentProduct = {};
var showForm = false;
var editingProduct;
var products = [];

function insertFormRow(product) {
  
}

function toggleForm(id) {
  $('#formRow').remove();
  insertFormRow(id)

  if (showForm) {
    $.ajax({
      url: '/game_form',
      method: 'GET',
      data: { id: editingProduct }
    }).done( function(html) {
      $('#toggle').after(html)
    });
  }
}

$(document).on('click', '[id=^Edit-button]') {
  var thisProduct = this.id.substring(11)
  toggleForm(thisProduct);
}

function deleteRow(id) {
  $('#tr-'+ id).remove();
}

$(document).on('click', '[id^=Delete-button]', function() {
  var thisRow = this.id.substring(14);
  deleteRow(thisRow);
  $.ajax({
    url: apiEndpoint + 'products/' + thisRow,
    type: 'DELETE',
  }).done( function() {
    deleteRow(thisRow);
  })
});

function buildButton(type, id) {
  return "<button class='ui btn' data-id='" + id + "' id='" + type + "-button-" + id + "'>" + type + "</button>"
}

function buildProductRow(product) {
  var tableRow = "<tr id='tr-" + product.id + "'>" +
  "<td>" + product.id + "</td>" +
  "<td>" + product.name + "</td>" +
  "<td>" + product.base_price + "</td>" + 
  "<td>" + buildButton('Show', product.id) + "</td>" +
  "<td>" + buildButton('Edit', product.id) + "</td>" +
  "<td>" + buildButton('Delete', product.id) + "</td>" +
  "</tr>";
  return tableRow;
}

$('#toggle').on('click', function() {
  toggleForm()
});



$(document).ready( function() {

  $.ajax({
    url: apiEndpoint + 'products',
    method: 'GET',
    dataType: 'JSON'
  }).done( function(data) {
    products = data;
    products.forEach( function(p) {
      $('#products').append(buildProductRow(p));
    })
  })

  

})