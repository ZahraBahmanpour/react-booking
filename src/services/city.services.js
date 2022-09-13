import axios from "./base.services";
import { generateQueryString } from "../utils/utils";

class CityService {
  getCitiesRequest = async (page) => {
    const queryString = generateQueryString(page);
    try {
      const response = await axios.get(`/cities${queryString}`);
      return {
        cities: response.data,
        totalCitiesCount: response.headers["x-total-count"],
      };
    } catch (e) {
      return e.message;
    }
  };
}

export default new CityService();
