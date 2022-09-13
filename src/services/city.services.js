import axios from "./base.services";
import { generateQueryString } from "../utils/utils";

class CityService {
  getCitiesRequest = async (page = 1) => {
    const queryString = generateQueryString(page);
    try {
      const response = await axios.get(`/cities${queryString}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  };
}

export default new CityService();
