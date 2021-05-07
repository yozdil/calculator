import { Container, Button, Segment } from "semantic-ui-react";

const Calculator = ({state, dispatch}) => {
  return (
    <Container fluid>
      <Segment id="display" textAlign="right">
        {state.value}
      </Segment>
      <Button.Group fluid color="blue" attached="top">
        <Button
          id="clear"
          onClick={() => dispatch({ type: "clear" })}
          size="massive"
          padded
        >
          AC
        </Button>
        <Button
          id="divide"
          onClick={() => dispatch({ type: "operator", operator: "divide" })}
          size="massive"
          padded
        >
          /
        </Button>
      </Button.Group>
      <Button.Group fluid color="blue" attached="top">
        <Button
          id="seven"
          onClick={() => dispatch({ type: "number", number: '7' })}
          size="massive"
          padded
        >
          7
        </Button>
        <Button
          id="eight"
          onClick={() => dispatch({ type: "number", number: '8' })}
          size="massive"
          padded
        >
          8
        </Button>
        <Button
          id="nine"
          onClick={() => dispatch({ type: "number", number: '9' })}
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
          x
        </Button>
      </Button.Group>
      <Button.Group fluid color="blue" attached="top">
        <Button
          id="four"
          onClick={() => dispatch({ type: "number", number: '4' })}
          size="massive"
          padded
        >
          4
        </Button>
        <Button
          id="five"
          onClick={() => dispatch({ type: "number", number: '5' })}
          size="massive"
          padded
        >
          5
        </Button>
        <Button
          id="six"
          onClick={() => dispatch({ type: "number", number: '6' })}
          size="massive"
          padded
        >
          6
        </Button>
        <Button
          id="minus"
          onClick={() => dispatch({ type: "operator", operator: "minus" })}
          size="massive"
          padded
        >
          -
        </Button>
      </Button.Group>
      <Button.Group>
        <Button.Group fluid color="blue" attached="top">
          <Button
            id="one"
            onClick={() => dispatch({ type: "number", number: '1' })}
            size="massive"
            padded
          >
            1
          </Button>
          <Button
            id="two"
            onClick={() => dispatch({ type: "number", number: '2' })}
            size="massive"
            padded
          >
            2
          </Button>
          <Button
            id="three"
            onClick={() => dispatch({ type: "number", number: '3' })}
            size="massive"
            padded
          >
            3
          </Button>
          <Button
            id="plus"
            onClick={() => dispatch({ type: "operator", operator: "plus" })}
            size="massive"
            padded
          >
            +
          </Button>
        </Button.Group>
      </Button.Group>
      <Button.Group fluid color="blue" attached="bottom">
        <Button
          id="zero"
          onClick={() => dispatch({ type: "number", number: '0' })}
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
          id="equals"
          onClick={() => dispatch({ type: "equals" })}
          size="massive"
          padded
        >
          =
        </Button>
      </Button.Group>
    </Container>
  );
};

export default Calculator;
