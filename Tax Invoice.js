function addRow() {
    var table = document.getElementById("bill");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = '<input type="text" name="itemName[]">';
    cell2.innerHTML = '<input type="number" name="quantity[]" oninput="calculateAmount(this)">';
    cell3.innerHTML = '<input type="number" name="rate[]" oninput="calculateAmount(this)">';
    cell4.innerHTML = '<input type="number" name="amount[]" readonly>';
    cell5.innerHTML = '<button onclick="removeRow(this)">Remove</button>';
  
    // Clear all input fields
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "text" || inputs[i].type === "number") {
        inputs[i].value = "";
      }
    }
  }