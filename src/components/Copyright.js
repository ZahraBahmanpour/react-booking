import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { APP_URL } from "../utils/utils";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href={APP_URL}>
        Booking.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
