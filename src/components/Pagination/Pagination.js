import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ count, handleChange, size }) => {
  return (
    <MuiPagination
      count={count}
      color="primary"
      onChange={handleChange}
      size={size}
      sx={{ margin: "0 auto" }}
    />
  );
};

export default Pagination;
