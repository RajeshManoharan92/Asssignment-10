function s() {
  var text1 = document.getElementById("first-name").value
  var text2 = document.getElementById("last-name").value
  var text3 = document.getElementById("address").value
  var text4 = document.getElementById("pincode").value
  var text5 = document.getElementById("t5").value
  var text7 = document.getElementById("t7").value
  var text8 = document.getElementById("t8").value
  
  var res = []
  
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]');
  
  if (text1, text2, text3, text4, text5, text7, text8 === "" ) {
    alert("Please Enter All Fields");

  }
  else {
    for (var i = 0; i < markedCheckbox.length; i++) {
      if (markedCheckbox[i].checked === true) {
        res.push(markedCheckbox[i].value + ' ')

        markedCheckbox[i].checked = false
      }

    }
    if (res.length < 2) {
      return alert("Must Select Two Foods");

    }
    var a = document.getElementById("table1")
    let row = a.insertRow()
    let td1 = row.insertCell()
    let td2 = row.insertCell()
    let td3 = row.insertCell()
    let td4 = row.insertCell()
    let td5 = row.insertCell()
    let td6 = row.insertCell()
    let td7 = row.insertCell()
    let td8 = row.insertCell()

    td1.innerText = text1
    td2.innerText = text2
    td3.innerText = text3
    td4.innerText = text4
    td5.innerText = text5
    td7.innerText = text7
    td8.innerText = text8
    td6.innerText += res

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("t5").value = "";
    document.getElementById("t7").value = "";
    document.getElementById("t8").value = "";

  }

}

(function () {
  var checkBoxGroup = document.forms['form']['check[]'];

  var limit = 2;
  for (var i = 0; i < checkBoxGroup.length; i++) {
    checkBoxGroup[i].onclick = function () {
      var checkedcount = 0;
      for (var i = 0; i < checkBoxGroup.length; i++) {
        checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
      }
      if (checkedcount > limit) {
        console.log("You can select maximum of " + limit + " checkboxes.");
        alert("You can select maximum of " + limit + " checkboxes.");
        this.checked = false;
      }

    }
  }
})();

