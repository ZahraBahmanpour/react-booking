import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Avatar, Grid, Stack } from "@mui/material";
import { orange } from "@mui/material/colors";
import { transformRating } from "../../utils/utils";
import styles from "./Card.module.css";

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
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Link to={`/stays/${id}`} className={styles.link}>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
              </Link>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {type}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="error">
                Only {reserveCount} left at this price on our site
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Typography variant="subtitle1">
                  {transformRating(rating)}
                </Typography>
                <Avatar sx={{ bgcolor: orange[500] }}>{rating}</Avatar>
              </div>
              <Typography variant="h6" component="div">
                {price}
              </Typography>
              <Typography color="text.secondary">
                Includes taxes and charges
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" variant="contained">
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
