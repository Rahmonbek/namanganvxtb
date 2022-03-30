import axios from "axios";

export const url = "https://api.namangan.abrorjonaxmadov.uz";

export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
