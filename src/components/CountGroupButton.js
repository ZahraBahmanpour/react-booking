import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const CountGroupButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleIncrement}>+</Button>
      <Button disabled>{count}</Button>
      <Button onClick={handleDecrement} disabled={count < 1}>
        -
      </Button>
    </ButtonGroup>
  );
};

export default CountGroupButton;
