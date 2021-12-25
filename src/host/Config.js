import { httpRequest, url } from "./Host";

export const getNews = () => {
  var config = {
    url: `${url}/news/`,
    method: "get",
   
  };
  return httpRequest(config);
};
