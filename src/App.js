import { useReducer } from "react";
import { Header } from "semantic-ui-react";
import Calculator from "./components/Calculator";
import "./styles/app.scss";

const initialState = {
  value: "",
  operator: "",
  num1: 0,
  num2: "",
};

function calculate(num1, operator, num2) {
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
}

function reducer(state, action) {
  switch (action.type) {
    case "number":
      return { ...state, value: state.value + action.number };
    case "operator":
      return {
        ...state,
        num1: state.value
          ? state.value
          : "",
        num2: "",
        value: "",
        operator: (state.operator && state.num1) ? state.operator : action.operator,
      };
    case "decimal":
      return {
        ...state,
        value: ("" && state.value.includes('.')) ? state.value : state.value + '.',
      };
      case "clear":
        return initialState;
    case "equals":
      return {
        ...state,
        num1: state.value
          ? state.value
          : "",
        num2: state.value ? state.value : "",
        value: calculate(state.num1, state.operator, state.value),
        operator: "",
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header as="h1">Hello</Header>
      <Calculator state={state} dispatch={dispatch} id="calculator" />
    </div>
  );
}

export default App;
