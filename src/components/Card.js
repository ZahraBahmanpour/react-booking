import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Badge, Grid } from "@mui/material";

const BasicCard = ({ id, name, rating, type, price, reserveCount, image }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img
              src={`/images/${image}.webp`}
              width={200}
              height={200}
              alt={name}
              style={{ borderRadius: 10 }}
            />
          </Grid>
          <Grid item xs={4}>
            <Link to={`/stays/${id}`}>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Badge badgeContent={rating} color="primary"></Badge>
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {type}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              {price}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ mb: 1.5 }} color="error">
              Only {reserveCount} left at this price on our site
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color="text.secondary">
              Includes taxes and charges
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
