import { Button, Container } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import FileUpload from "../../components/FileUpload";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel";
import { UseAuthContext } from "../../context/AuthContext";
import { storage } from "../../firebase/firebase-config";

const UserProfile = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);

  const handleFileChange = (e) => {};

  const handleSave = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    console.log("file", e.target);
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const {
    user: {
      userInfo: { displayName },
    },
  } = UseAuthContext();
  return (
    <Container component="form" sx={{ marginTop: 5 }} onSubmit={handleSave}>
      <h1>{displayName}</h1>
      <FileUpload title={"Upload"} onFileChange={handleFileChange} />
      {!imgUrl && progresspercent !== 0 && (
        <LinearProgressWithLabel value={progresspercent} />
      )}
      {imgUrl && (
        <div>
          <h6>{imgUrl}</h6>
          <img src={imgUrl} alt="uploaded file" width={200} height={200} />
        </div>
      )}
      <Button variant="contained" type="submit">
        Save Changes
      </Button>
    </Container>
  );
};

export default UserProfile;
