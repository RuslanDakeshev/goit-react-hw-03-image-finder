import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '30631907-546b0295f9f733df7d637ab77';

export let imagesOfPages = 0;

export async function fetchPictures(page, searchWord) {
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        page,
        q: searchWord,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    imagesOfPages = Math.ceil(response.data.totalHits / 12);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}
