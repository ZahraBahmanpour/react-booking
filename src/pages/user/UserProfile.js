import { Button, Container } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import FileUpload from "../../components/FileUpload";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel";
import { UseAuthContext } from "../../context/AuthContext";
import { storage } from "../../firebase/firebase-config";

const UserProfile = () => {
  const {
    user: {
      userInfo: { displayName, photoURL },
    },
    updateUserProfile,
  } = UseAuthContext();
  const [imgUrl, setImgUrl] = useState(photoURL);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setImgUrl(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
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
          updateUserProfile({ photoURL: downloadURL });
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <Container component="form" sx={{ marginTop: 5 }} onSubmit={handleSave}>
      <h1>{displayName}</h1>
      <FileUpload title={"Upload"} onFileChange={handleFileChange} />
      {progresspercent !== 0 && (
        <LinearProgressWithLabel value={progresspercent} />
      )}
      {imgUrl && (
        <div>
          <img src={imgUrl} alt="uploaded file" width={100} height={100} />
        </div>
      )}
      <Button variant="contained" type="submit">
        Save Changes
      </Button>
    </Container>
  );
};

export default UserProfile;
