import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ count, handleChange }) => {
  return (
    <MuiPagination count={count} color="primary" onChange={handleChange} />
  );
};

export default Pagination;
