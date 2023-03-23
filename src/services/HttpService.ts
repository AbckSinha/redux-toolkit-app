import axios from "axios";

const httpService = {
  get: axios.get,
  delete: axios.delete,
  post : axios.post,
  put: axios.put
};

export default httpService;