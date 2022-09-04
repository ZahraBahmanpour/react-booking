import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const DropDown = ({ title, items }) => {
  const [value, setValue] = useState("");
  return (
    <FormControl fullWidth>
      <InputLabel id={`${title}-input-label`}>{title}</InputLabel>
      <Select
        labelId={`${title}-select-label`}
        id={`${title}-simple-select`}
        value={value}
        label={title}
        onChange={(e) => setValue(e.target.value)}
      >
        {items.map((item) => (
          <MenuItem value={item.value}>{item.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default DropDown;
