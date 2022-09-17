import { Button, Container, IconButton, Stack } from "@mui/material";
import { UseAuthContext } from "../../context/AuthContext";
import { AiFillCamera } from "react-icons/ai";
const UserProfile = () => {
  const {
    user: {
      userInfo: { displayName },
    },
  } = UseAuthContext();
  return (
    <Container sx={{ marginTop: 5 }}>
      <h1>{displayName}</h1>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <AiFillCamera />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default UserProfile;
