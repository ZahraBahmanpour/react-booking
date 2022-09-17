import { Tooltip } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { UseAuthContext } from "../../../context/AuthContext";
import FavoriteServices from "../../../services/favorite.services";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ id }) => {
  const {
    user: {
      favorites: { id: favoriteId, favorites: favoriteList },
      userInfo: { uid },
    },
    readFavorites,
  } = UseAuthContext();
  console.log("favoriteList", favoriteList);
  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    if (favoriteList && favoriteList.length) {
      const newFavoritesList = [...favoriteList, id];
      await FavoriteServices.updateFavoritesRequest(
        favoriteId,
        newFavoritesList
      );
    } else {
      await FavoriteServices.createFavoritesRequest(uid, id);
    }
    await readFavorites(uid);
  };

  return (
    <Tooltip title="Add to Favorites" arrow>
      <div style={{ position: "absolute", top: 10, right: 70 }}>
        <FaHeart
          className={
            styles[
              favoriteList && favoriteList.includes(id)
                ? "heart-icon-favorite"
                : "heart-icon"
            ]
          }
          onClick={handleFavoriteClick}
        />
      </div>
    </Tooltip>
  );
};

export default FavoriteButton;
