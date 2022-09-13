import { Button, Container, Grid } from "@mui/material";
import DatePicker from "../../components/DatePicker";
import DropDown from "../../components/DropDown";
import StayInfoPopOver from "../../components/StayInfoPopOver";
import StaysList from "../../components/StaysList";
import { useDispatch, useSelector } from "react-redux";
import { getStays, resetFilters } from "../../redux/features/staysSlice";
import { useEffect, useState } from "react";
import cityServices from "../../services/city.services";

const Stays = () => {
  const [cities, setCities] = useState([]);
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
  useEffect(() => {
    const fetchCities = async () => {
      const cities = await cityServices.getCitiesRequest();
      setCities(cities);
    };
    fetchCities();
  }, []);
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
      <StaysList stays={stays} />
    </Container>
  );
};

export default Stays;
