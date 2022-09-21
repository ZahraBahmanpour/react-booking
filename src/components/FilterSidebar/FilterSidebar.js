import { Card, Typography } from "@mui/material";
import FilterCard from "./FilterCard/FilterCard";
import FilterGroups from "./Filters";

const FilterSidebar = () => {
  return (
    <Card variant="outlined" sx={{ minWidth: 200 }}>
      <Typography variant="h6" component="div" sx={{ margin: 1 }}>
        Filter by:
      </Typography>
      {FilterGroups.map((fg) => (
        <FilterCard {...fg} />
      ))}
    </Card>
  );
};

export default FilterSidebar;
