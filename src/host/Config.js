import { httpRequest, url } from "./Host";

export const getNews = () => {
  var config = {
    url: `${url}/news/`,
    method: "get",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Token ${window.localStorage.getItem("token")}`,
    },
  };
  return httpRequest(config);
};
