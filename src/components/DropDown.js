import { Autocomplete, Box, TextField } from "@mui/material";
import { setFilter } from "../redux/features/staysSlice";
import { useDispatch } from "react-redux";

const DropDown = ({ title, items }) => {
  const dispatch = useDispatch();
  const handleChange = (e, selected) => {
    console.log(selected.value);
    dispatch(setFilter({ filter: { city: selected.value } }));
  };
  return (
    <Autocomplete
      id={`${title}-select`}
      onChange={(e, selected) => handleChange(e, selected)}
      options={items}
      autoHighlight
      getOptionLabel={(option) => option.text}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.text}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};
export default DropDown;
