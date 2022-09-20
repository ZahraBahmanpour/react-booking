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
        favorite: stayId,
      });
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
  deleteFavoritesRequest = async (id) => {
    try {
      const response = await axios.delete(`/favorites/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
}

export default new FavoriteService();
