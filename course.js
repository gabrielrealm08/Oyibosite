function placeOrder() {
  var orderForm = document.getElementById("my-form");
  results = "<h3>Success!</h3> Here is your order.";
  results += "<br>Name: " + orderForm.elements["my-name"].value;
  results += "<br>Email Address: " + orderForm.elements["my-address"].value;
  results +=
    "<br>I like to order a project: " + orderForm.elements["my-project"].value;
  results += "<br>Project Quantity: " + orderForm.elements["my-prj"].value;
  var orderResults = document.getElementById("my-project");
  orderResults.style.display = "block";
  orderResults.innerHTML = results;
}
