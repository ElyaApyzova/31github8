let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let clickedButton = e.target.innerHTML;

    if (clickedButton === "=") {
      try {
        let result = eval(expression);
        if (isFinite(result)) {
          input.value = result;
          expression = result.toString();
        } else {
          input.value = "Error: Empty";
          expression = "";
        }
      } catch (error) {
        input.value = "Error: Invalid input";
        expression = "";
      }
    } else if (clickedButton === "C1") {
      expression = "";
      input.value = "";
    } else if (clickedButton === "Del") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else {
      expression += clickedButton;
      input.value = expression;
    }
  });
});
