import axios from "axios";
import { BASE_URL } from "../utils/utils";

axios.defaults.baseURL = BASE_URL;

export default axios;
