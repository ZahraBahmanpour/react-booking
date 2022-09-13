import axios from "axios";
import { BASE_URL, generateQueryString } from "../utils/utils";

axios.defaults.baseURL = BASE_URL;

class StaysService {
  getStaysRequest = async (page = 1, filters) => {
    const queryString = generateQueryString(page, filters);
    try {
      const response = await axios.get(`/stays${queryString}`);
      return {
        stays: response.data,
        totalStaysCount: response.headers["x-total-count"],
      };
    } catch (e) {
      return Promise.reject(e.message);
    }
  };
}

export default new StaysService();
