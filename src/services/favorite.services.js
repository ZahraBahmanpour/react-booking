import axios from "./base.services";

class FavoriteService {
  getFavoritesRequest = async (userId) => {
    try {
      const response = await axios.get(`/favorites?userId=${userId}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
  createFavoritesRequest = async (userId, stayId) => {
    try {
      const response = await axios.post("/favorites", {
        userId,
        favorites: [stayId],
      });
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
  updateFavoritesRequest = async (id, favorites) => {
    try {
      const response = await axios.patch(`/favorites/${id}`, { favorites });
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
}

export default new FavoriteService();
