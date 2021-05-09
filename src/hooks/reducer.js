const initialState = {
  num: "",
  operator: "",
  result: "",
  negative: " ",
};

const calculate = (num2, operator, result) => {
  const numOne = Number(num2);
  const numTwo = Number(result);
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

const addOperator = (operator) => {
  switch (operator) {
    case "plus":
      return " + ";
    case "minus":
      return " - ";
    case "multiply":
      return " * ";
    case "divide":
      return " / ";
    default:
      return "";
  }
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "number":
      return {
        ...state,
        negative: " ",
        result: state.num
          ? state.result
          : state.result +
            (state.operator ? addOperator(state.operator) : "") +
            state.negative,
        num: state.num + (state.num === "0" ? "" : action.number),
        operator: ""
      };
    case "operator":
      return {
        ...state,
        num: "",
        result: state.result + state.num,
        operator:
          action.operator === "minus" ? state.operator : action.operator,
        negative:
          action.operator === "minus"
            ? state.negative.includes("-")
              ? " "
              : addOperator(action.operator)
            : " ",
      };

    case "decimal":
      return {
        ...state,
        num: state.num.includes(".") ? state.num : state.num + ".",
      };
    case "delete":
      return {
        ...state,
        num: state.num ? state.num.split("").slice(0, -1).join("") : state.num,
      };
    case "clear":
      return initialState;
    case "equals":
      return {
        ...state,
        num: eval(state.result + " " + state.num),
        operator: "",
        result: "",
      };
    default:
      throw new Error();
  }
};

export { Reducer, initialState };
