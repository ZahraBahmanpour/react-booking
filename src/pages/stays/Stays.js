import { Container, Grid } from "@mui/material";
import CountGroupButton from "../../components/CountGroupButton";
import DatePicker from "../../components/DatePicker";
import DropDown from "../../components/DropDown";
import cities from "../../data/cities";

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
        <Grid item xs={2} sm={4} md={2}>
          <CountGroupButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Stays;
