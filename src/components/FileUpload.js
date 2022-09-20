import { IconButton, Stack } from "@mui/material";
import { AiFillCamera } from "react-icons/ai";

const FileUpload = ({ title, onFileChange }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton color="primary" aria-label={title} component="label">
        <input hidden accept="image/*" type="file" onChange={onFileChange} />
        <AiFillCamera />
      </IconButton>
    </Stack>
  );
};

export default FileUpload;
