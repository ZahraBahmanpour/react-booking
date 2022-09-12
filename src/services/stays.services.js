import axios from "axios";
import { BASE_URL, DEFAULT_PAGE_SIZE } from "../utils/utils";

axios.defaults.baseURL = BASE_URL;

class StaysService {
  getStaysRequest = async (page = 1) => {
    try {
      const response = await axios.get(
        `/stays?_page=${page}&_limit=${DEFAULT_PAGE_SIZE}`
      );
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
