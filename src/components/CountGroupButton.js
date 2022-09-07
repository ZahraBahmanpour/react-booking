import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const CountGroupButton = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <ButtonGroup
      size="small"
      aria-label="small outlined button group"
      sx={{ alignItems: "center" }}
    >
      <div style={{ width: "40%", marginRight: 10 }}>{title}</div>
      <Button onClick={handleIncrement}>+</Button>
      <Button disabled>{count}</Button>
      <Button onClick={handleDecrement} disabled={count < 1}>
        -
      </Button>
    </ButtonGroup>
  );
};

export default CountGroupButton;
