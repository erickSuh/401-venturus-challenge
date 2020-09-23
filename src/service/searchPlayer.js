import axios from 'axios';

const url = process.env.REACT_APP_SEARCH_FOOTBALL_API
  || 'https://api-football-v1.p.rapidapi.com/v2/players/search';

const api = axios.create({
  baseURL: url,
});

let cancelToken;

const search = {
  search: async (name) => {
    // Check if there are any previous pending requests
    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel('Operation canceled due to new request.');
    }

    // Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    const resp = await api.get(`/${name}`, {
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      },
      cancelToken: cancelToken.token,
    });
    if (resp) {
      return resp.data.api.players;
    }
    return [];
  },
};

export default search;
