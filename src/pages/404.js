import { Box, Button, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const primary = teal[500]; // #f44336

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white", padding: 20 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={handleBack}>
        Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
