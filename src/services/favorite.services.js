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
}

export default new FavoriteService();
