import { Button, IconButton, Stack } from "@mui/material";
import { AiFillCamera } from "react-icons/ai";

const FileUpload = ({ title }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        {title}
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <AiFillCamera />
      </IconButton>
    </Stack>
  );
};

export default FileUpload;
