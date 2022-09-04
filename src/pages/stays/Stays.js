import { Container } from "@mui/material";
import DropDown from "../../components/DropDown";
import cities from "../../data/cities";

const Stays = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <DropDown title={"Where"} items={cities} />
    </Container>
  );
};

export default Stays;
