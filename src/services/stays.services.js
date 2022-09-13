import axios from "./base.services";
import { generateQueryString } from "../utils/utils";

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
