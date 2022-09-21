import { Button, Container, Grid } from "@mui/material";
import DatePicker from "../../components/DatePicker";
import StayInfoPopOver from "../../components/StayInfoPopOver";
import StaysList from "../../components/StaysList";
import { useDispatch, useSelector } from "react-redux";
import { getStays, resetFilters } from "../../redux/features/staysSlice";
import CitiesDropDown from "../../components/CitiesDropDownDropDown";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";

const Stays = () => {
  const dispatch = useDispatch();
  const { stays, filters } = useSelector((state) => state.stays);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getStays({ page: 1, filters }));
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetFilters());
    dispatch(getStays({}));
  };
  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ marginTop: 5 }}>
          <Grid item xs={2} sm={4} md={2}>
            <CitiesDropDown title={"Where"} />
          </Grid>
          <Grid item xs={2} sm={4} md={2}>
            <DatePicker title="From" />
          </Grid>
          <Grid item xs={2} sm={4} md={2}>
            <DatePicker title="To" />
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <StayInfoPopOver />
          </Grid>
          <Grid item xs={2} sm={4} md={2}>
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={1}>
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          <Grid item xs={2} sm={4} md={2}>
            <FilterSidebar />
          </Grid>
          <Grid item xs={2} sm={4} md={10}>
            <StaysList stays={stays} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Stays;
