import axios from "./base.services";

class CityService {
  getCitiesRequest = async () => {
    try {
      const response = await axios.get("/cities");
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
}

export default new CityService();
