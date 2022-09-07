import { Button, Popover, Stack } from "@mui/material";
import { useState } from "react";
import CountGroupButton from "./CountGroupButton";

const StayInfoPopOver = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div>
      <Button onClick={handleClick}>1 Adult | 0 Children | 1 Room</Button>
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
          <CountGroupButton title={"Adults"} />
          <CountGroupButton title={"Children"} />
          <CountGroupButton title={"Rooms"} />
        </Stack>
      </Popover>
    </div>
  );
};

export default StayInfoPopOver;
