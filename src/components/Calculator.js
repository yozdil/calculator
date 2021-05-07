import "../styles/calculator.scss";
import { Container, Button, Segment, Header } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faEquals,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Calculator = ({ state, dispatch }) => {
  return (
    <Container fluid>
      <Segment color="blue" inverted>
        <Segment textAlign="right">
          <Header id="display">{state.value ? state.value : '0'}</Header>
        </Segment>
        <Button.Group widths="4" fluid color="blue" attached="top">
          <Button
            id="clear"
            onClick={() => dispatch({ type: "clear" })}
            size="massive"
            padded
          >
            AC
          </Button>
          <Button
            id="equals"
            onClick={() => dispatch({ type: "equals" })}
            size="massive"
            padded
          >
            <FontAwesomeIcon icon={faEquals} />
          </Button>
        </Button.Group>
        <Button.Group widths="4" fluid color="blue" attached="top">
          <Button
            id="seven"
            onClick={() => dispatch({ type: "number", number: "7" })}
            size="massive"
            padded
          >
            7
          </Button>
          <Button
            id="eight"
            onClick={() => dispatch({ type: "number", number: "8" })}
            size="massive"
            padded
          >
            8
          </Button>
          <Button
            id="nine"
            onClick={() => dispatch({ type: "number", number: "9" })}
            size="massive"
            padded
          >
            9
          </Button>
          <Button
            id="multiply"
            onClick={() => dispatch({ type: "operator", operator: "multiply" })}
            size="massive"
            padded
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Button.Group>
        <Button.Group widths="4" fluid color="blue" attached="top">
          <Button
            id="four"
            onClick={() => dispatch({ type: "number", number: "4" })}
            size="massive"
            padded
          >
            4
          </Button>
          <Button
            id="five"
            onClick={() => dispatch({ type: "number", number: "5" })}
            size="massive"
            padded
          >
            5
          </Button>
          <Button
            id="six"
            onClick={() => dispatch({ type: "number", number: "6" })}
            size="massive"
            padded
          >
            6
          </Button>
          <Button
            id="divide"
            onClick={() => dispatch({ type: "operator", operator: "divide" })}
            size="massive"
            padded
          >
            <FontAwesomeIcon icon={faDivide} />
          </Button>
        </Button.Group>
        <Button.Group>
          <Button.Group widths="4" fluid color="blue" attached="top">
            <Button
              id="one"
              onClick={() => dispatch({ type: "number", number: "1" })}
              size="massive"
              padded
            >
              1
            </Button>
            <Button
              id="two"
              onClick={() => dispatch({ type: "number", number: "2" })}
              size="massive"
              padded
            >
              2
            </Button>
            <Button
              id="three"
              onClick={() => dispatch({ type: "number", number: "3" })}
              size="massive"
              padded
            >
              3
            </Button>
            <Button
              id="minus"
              onClick={() => dispatch({ type: "operator", operator: "minus" })}
              size="massive"
              padded
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </Button.Group>
        </Button.Group>
        <Button.Group widths="4" fluid color="blue" attached="bottom">
          <Button
            id="delete"
            onClick={() => dispatch({ type: "delete" })}
            size="massive"
            padded
          >
            C
          </Button>
          <Button
            id="zero"
            onClick={() => dispatch({ type: "number", number: "0" })}
            size="massive"
            padded
          >
            0
          </Button>
          <Button
            id="decimal"
            onClick={() => dispatch({ type: "decimal" })}
            size="massive"
            padded
          >
            .
          </Button>
          <Button
            id="plus"
            onClick={() => dispatch({ type: "operator", operator: "plus" })}
            size="massive"
            padded
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Button.Group>
      </Segment>
    </Container>
  );
};

export default Calculator;
