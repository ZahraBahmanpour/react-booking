import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import staysServices from "../../services/stays.services";

const StayDetails = () => {
  const [stay, setStay] = useState([]);
  const { stayId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStay = async () => {
      const stay = await staysServices.getStayRequest(stayId);
      setStay(stay);
    };
    fetchStay();
  }, [stayId]);

  const handleBooking = (e) => {
    e.preventDefault();
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/stays");
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item xs={2} sm={4} md={12}>
          {stay.name}
        </Grid>
        <Grid item xs={2} sm={4} md={12}>
          <Button onClick={handleBack}>Back</Button>
          <Button variant="contained" onClick={handleBooking}>
            Book now!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StayDetails;
