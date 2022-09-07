import { Button, Popover, Stack } from "@mui/material";
import { useState } from "react";
import CountGroupButton from "./CountGroupButton";

const StayInfoPopOver = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adultsCout, setAdultsCout] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div>
      <Button onClick={handleClick}>
        {adultsCout} Adult{adultsCout > 1 ? "s" : ""} | {childrenCount} Children
        | {roomsCount} Room{roomsCount > 1 ? "s" : ""}
      </Button>
      <Popover
        id={"asasa"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack spacing={2} sx={{ padding: 4 }}>
          <CountGroupButton
            title={"Adults"}
            value={adultsCout}
            incrementHandler={() => setAdultsCout((prevCount) => prevCount + 1)}
            decrementHandler={() => setAdultsCout((prevCount) => prevCount - 1)}
          />
          <CountGroupButton
            title={"Children"}
            value={childrenCount}
            incrementHandler={() =>
              setChildrenCount((prevCount) => prevCount + 1)
            }
            decrementHandler={() =>
              setChildrenCount((prevCount) => prevCount - 1)
            }
          />
          <CountGroupButton
            title={"Rooms"}
            value={roomsCount}
            incrementHandler={() => setRoomsCount((prevCount) => prevCount + 1)}
            decrementHandler={() => setRoomsCount((prevCount) => prevCount - 1)}
          />
        </Stack>
      </Popover>
    </div>
  );
};

export default StayInfoPopOver;
