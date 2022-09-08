import { Box } from "@mui/material";
import BasicCard from "./Card";

const StaysList = ({ stays }) => {
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 5 }}>
      {stays.map((stay) => (
        <BasicCard key={stay.id} {...stay} />
      ))}
    </Box>
  );
};
export default StaysList;
