import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { setFilter } from "../redux/features/staysSlice";
import { useDispatch } from "react-redux";

const DropDown = ({ title, items }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(setFilter({ filter: { city: e.target.value } }));
  };
  return (
    <FormControl fullWidth>
      <InputLabel id={`${title}-input-label`}>{title}</InputLabel>
      <Select
        labelId={`${title}-select-label`}
        id={`${title}-simple-select`}
        value={value}
        label={title}
        onChange={(e) => handleChange(e)}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default DropDown;
