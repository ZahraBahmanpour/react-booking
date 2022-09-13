import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { setFilter } from "../redux/features/staysSlice";
import { useDispatch } from "react-redux";
import Pagination from "./Pagination/Pagination";
import { DEFAULT_PAGE_SIZE } from "../utils/utils";

const DropDown = ({ title, items, totalItemsCount, handlePageChange }) => {
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
        <div key={"pagination"}>
          <Pagination
            count={Math.ceil(totalItemsCount / DEFAULT_PAGE_SIZE)}
            handleChange={handlePageChange}
            size="small"
          />
        </div>
      </Select>
    </FormControl>
  );
};
export default DropDown;
