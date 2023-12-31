let result; //undefined
let inputNumber; //임시 저장 공간
let operator; //임시 연산자 저장 공간

const resultEl = document.querySelector(".result");

function inputResult(value) {
  result = value || "0";

  if (result.length > 16) {
    resultEl.innerText = `${result.substring(0, 16)}...`;
  } else {
    resultEl.innerText = result;
  }
}

function clickNumber(number) {
  if (result === "0") result = "";

  let numberValue = result + number;

  inputResult(numberValue);
}

function clickDel() {
  inputResult(result.substring(0, result.length - 1));
}

function clickOperator(_operator) {
  if (result === "0") {
    alert("Please input value.");
    return;
  }
  operator = _operator;
  inputNumber = result;
  console.log(inputNumber);
  console.log(operator);
  inputResult();
}

function clickEnter() {
  if (result === "0" || !inputNumber || !operator) {
    alert("Please input value.");
    return;
  }

  switch (operator) {
    case "+":
      result = +inputNumber + +result;
      inputResult(result + "");
      inputNumber = "";
      break;
    case "-":
      result = +inputNumber - +result;
      inputResult(result + "");
      inputNumber = "";
      break;
    case "*":
      result = +inputNumber * +result;
      inputResult(result + "");
      inputNumber = "";
      break;
    case "/":
      result = parseInt(+inputNumber / +result, 10);
      inputResult(result + "");
      inputNumber = "";
      break;
  }
}

inputResult();

//×,÷
