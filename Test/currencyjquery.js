function converter() {
  var lira = parseInt(document.getElementById('converter_amount-input').value);
  var convert = document.getElementById('converter_amount-select').value;
  var result = document.getElementById('converter-result');
  if (convert == 1) {
    result.value = lira * 19.42;
    result.type = "text";
  }
  if (convert == 2) {
    result.value = lira * 21.08;
    result.type = "text";
  }
  if (convert == 3) {
    result.value = lira * 0.14;
    result.type = "text";
  }
  if (convert == 4) {
    result.value = lira * 24.01;
    result.type = "text";
  }
  if (convert == 5) {
    result.value = lira * 2.85;
    result.type = "text";
  }
  if (convert == 6) {
    result.value = lira * 1.85;
    result.type = "text";
  }

}