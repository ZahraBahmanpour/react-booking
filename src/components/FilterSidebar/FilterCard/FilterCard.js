import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const FilterCard = ({ title, filters }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 0, padding: 1 }}>
      <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <CardContent>
        {filters.map((f) => (
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label={f} />
          </FormGroup>
        ))}
      </CardContent>
    </Card>
  );
};

export default FilterCard;
