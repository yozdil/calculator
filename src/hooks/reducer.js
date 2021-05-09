const initialState = {
  negative: " ",
  num: "",
  operator: "",
  result: "",
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
        num: state.num + (state.num === "0" ? "" : action.number),
        operator: "",
        result: state.num
          ? state.result
          : state.result +
            (state.operator ? addOperator(state.operator) : "") +
            state.negative,
      };
    case "operator":
      return {
        ...state,
        negative:
          action.operator === "minus"
            ? state.negative.includes("-")
              ? " "
              : addOperator(action.operator)
            : " ",
        num: "",
        operator:
          action.operator === "minus" ? state.operator : action.operator,
        result: state.result + state.num,
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
        negative: " ",
        num: eval(state.result + " " + state.num),
        operator: "",
        result: "",
      };
    default:
      throw new Error();
  }
};

export { Reducer, initialState };
