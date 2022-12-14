import { Tooltip } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { UseAuthContext } from "../../../context/AuthContext";
import FavoriteServices from "../../../services/favorite.services";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ id }) => {
  const {
    user: {
      favorites,
      userInfo: { uid },
    },
    readFavorites,
  } = UseAuthContext();
  const existingFavorite = favorites.find((f) => f.favorite === id);
  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    try {
      if (existingFavorite) {
        await FavoriteServices.deleteFavoritesRequest(existingFavorite.id);
      } else {
        await FavoriteServices.createFavoritesRequest(uid, id);
      }
      await readFavorites(uid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tooltip title={existingFavorite ? "Remove" : "Save"} arrow>
      <div style={{ position: "absolute", top: 10, right: 90 }}>
        <FaHeart
          className={
            styles[existingFavorite ? "heart-icon-favorite" : "heart-icon"]
          }
          onClick={handleFavoriteClick}
        />
      </div>
    </Tooltip>
  );
};

export default FavoriteButton;
