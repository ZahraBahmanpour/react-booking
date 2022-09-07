import { Button, ButtonGroup } from "@mui/material";

const CountGroupButton = ({
  title,
  value,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <ButtonGroup
      size="small"
      aria-label="small outlined button group"
      sx={{ alignItems: "center" }}
    >
      <div style={{ width: "40%", marginRight: 10 }}>{title}</div>
      <Button onClick={incrementHandler}>+</Button>
      <Button disabled>{value}</Button>
      <Button onClick={decrementHandler} disabled={value < 1}>
        -
      </Button>
    </ButtonGroup>
  );
};

export default CountGroupButton;
