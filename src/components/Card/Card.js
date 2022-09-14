import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Grid, Stack, Tooltip } from "@mui/material";
import { orange } from "@mui/material/colors";
import { dollarUSLocale, transformRating } from "../../utils/utils";
import styles from "./Card.module.css";
import { FaHeart } from "react-icons/fa";

const BasicCard = ({ id, name, rating, type, price, reserveCount, image }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(`/stays/${id}`);
  };
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div style={{ position: "relative" }}>
              <img
                src={`/images/${image}.webp`}
                width={200}
                height={200}
                alt={name}
                style={{ borderRadius: 10 }}
              />
              <Tooltip title="Add to Favorites" arrow>
                <div style={{ position: "absolute", top: 10, right: 70 }}>
                  <FaHeart className={styles["heart-icon"]} />
                </div>
              </Tooltip>
            </div>
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
                ${dollarUSLocale.format(price)}
              </Typography>
              <Typography color="text.secondary">
                Includes taxes and charges
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" variant="contained" onClick={handleDetailsClick}>
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
