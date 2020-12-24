import config from './config';

export const search = () => {
  return fetch(config.REISEARCH_API_ENDPOINT)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      throw new Error("There was an error retrieving the search results");
    })
    .catch((e) => {
      console.error(e);
    });
};
