let currentValue = '';
    let currentOperator = '';
    let isCalculating = false;

    function appendValue(value) {
      if (isCalculating) {
        currentValue = value;
        isCalculating = false;
      } else {
        currentValue += value;
      }
      updateDisplay();
    }

    function appendOperator(operator) {
      if (isCalculating) {
        currentOperator = operator;
      } else {
        calculate();
        currentOperator = operator;
        isCalculating = true;
      }
      updateDisplay();
    }

    function appendDecimal() {
      if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
      }
    }

    function clearCalculator() {
      currentValue = '';
      currentOperator = '';
      updateDisplay();
    }

    function calculate() {
      if (currentValue && currentOperator) {
        let result = '';
        try {
          result = eval(currentValue + currentOperator + currentValue);
        } catch (error) {
          result = 'Error';
        }
        currentValue = result.toString();
        currentOperator = '';
        isCalculating = true;
        updateDisplay();
      }
    }

    function updateDisplay() {
      document.getElementById('result').value = currentValue;
    }

    document.addEventListener('keypress', function (event) {
      if (isCalculating) {
        clearCalculator();
      }
      appendValue(event.key);
    });