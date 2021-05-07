import { useReducer } from "react";
import { Header } from "semantic-ui-react";
import Calculator from "./components/Calculator";
import {Reducer, initialState} from './hooks/reducer'





function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <Header as="h1">Hello</Header>
      <Calculator state={state} dispatch={dispatch} id="calculator" />
    </div>
  );
}

export default App;
