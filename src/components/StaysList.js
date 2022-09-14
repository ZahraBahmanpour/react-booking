import { Box, CircularProgress } from "@mui/material";
import BasicCard from "./Card/Card";
import Pagination from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { DEFAULT_PAGE_SIZE } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getStays } from "../redux/features/staysSlice";

const StaysList = ({ stays }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { totalStaysCount, loading } = useSelector((state) => state.stays);
  useEffect(() => {
    dispatch(getStays({ page }));
  }, [page, dispatch]);

  if (loading && !stays.length)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 5 }}>
      {stays.map((stay) => (
        <BasicCard key={stay.id} {...stay} />
      ))}
      <Pagination
        count={Math.ceil(Number(totalStaysCount) / DEFAULT_PAGE_SIZE)}
        handleChange={(e, value) => setPage(value)}
      />
    </Box>
  );
};
export default StaysList;
