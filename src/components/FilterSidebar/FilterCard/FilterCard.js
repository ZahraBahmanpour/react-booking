import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/features/staysSlice";

const FilterCard = ({ title, filters }) => {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(setFilter({ filter: { [title]: e.target.value } }));
  };
  return (
    <Card variant="outlined" sx={{ borderRadius: 0, padding: 1 }}>
      <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <CardContent>
        {filters.map((f) => (
          <FormGroup key={f}>
            <FormControlLabel
              control={<Checkbox value={f} onChange={handleFilterChange} />}
              label={f}
            />
          </FormGroup>
        ))}
      </CardContent>
    </Card>
  );
};

export default FilterCard;
