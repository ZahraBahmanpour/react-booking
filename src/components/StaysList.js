import { Box } from "@mui/material";
import BasicCard from "./Card/Card";
import Pagination from "../components/Pagination/Pagination";
import { DEFAULT_PAGE_SIZE } from "../utils/utils";
import { useState } from "react";

const StaysList = ({ stays }) => {
  const [page, setPage] = useState(1);
  const paginatedStays = stays.slice(
    DEFAULT_PAGE_SIZE * (page - 1),
    page * DEFAULT_PAGE_SIZE
  );
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 5 }}>
      {paginatedStays.map((stay) => (
        <BasicCard key={stay.id} {...stay} />
      ))}
      <Pagination
        count={Math.ceil(stays.length / DEFAULT_PAGE_SIZE)}
        handleChange={(e, value) => setPage(value)}
      />
    </Box>
  );
};
export default StaysList;
