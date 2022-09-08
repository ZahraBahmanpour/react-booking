import { Button, Container, Grid } from "@mui/material";
import DatePicker from "../../components/DatePicker";
import DropDown from "../../components/DropDown";
import StayInfoPopOver from "../../components/StayInfoPopOver";
import StaysList from "../../components/StaysList";
import cities from "../../data/cities";
import stays from "../../data/stays";

const Stays = () => {
  return (
    <Container>
      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item xs={2} sm={4} md={2}>
          <DropDown title={"Where"} items={cities} />
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          <DatePicker title="From" />
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          <DatePicker title="To" />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <StayInfoPopOver />
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
      <StaysList stays={stays} />
    </Container>
  );
};

export default Stays;
