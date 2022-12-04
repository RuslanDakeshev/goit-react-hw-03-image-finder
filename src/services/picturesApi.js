import axios from "axios";

axios.defaults.baseURL =
  "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12";

const API_KEY = "29796536-5ed99ce8effe96d6d69c656a8";

export const getPictures = (page) => {
  return axios("trending/picture/day", {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
};
