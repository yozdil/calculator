const initialState = {
  value: "",
  operator: "",
  num1: 0,
  num2: "",
};

const calculate = (num1, operator, num2) => {
  const numOne = Number(num1);
  const numTwo = Number(num2);
  switch (operator) {
    case "plus":
      return numOne + numTwo;
    case "minus":
      return numOne - numTwo;
    case "multiply":
      return numOne * numTwo;
    case "divide":
      return numOne / numTwo;
    default:
      return 0;
  }
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "number":
      return {
        ...state,
        num2: state.operator
          ? calculate(state.num1, state.operator, (state.value + action.number))
          : "",
        value: state.value + action.number,
      };
    case "operator":
      return {
        ...state,
        num1: state.num2 ? state.num2 : (state.value || state.num1),
        // num2: "",
        value: "",
        operator: action.operator,
      };
    case "decimal":
      return {
        ...state,
        value:
          "" && state.value.includes(".") ? state.value : state.value + ".",
      };
    case "delete":
      return {
        ...state,
        value: state.value
          ? state.value.split("").slice(0, -1).join("")
          : state.value,
      };
    case "clear":
      return initialState;
    case "equals":
      return {
        ...state,
        num1: state.value ? state.value : "",
        num2: state.value ? state.value : "",
        value: calculate(state.num1, state.operator, state.value),
        operator: "",
      };
    default:
      throw new Error();
  }
};

export { Reducer, initialState };
