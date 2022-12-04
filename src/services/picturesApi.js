import axios from "axios";

axios.defaults.baseURL =
  "https://pixabay.com/api/";

const API_KEY = "29796536-5ed99ce8effe96d6d69c656a8";

export async function fetchPictures(page, searchWord){
  try {
    const response = await axios.get('', {
      params: {
        api_key: API_KEY,
        page: page,
        q: searchWord,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.log(error)
  }
};
