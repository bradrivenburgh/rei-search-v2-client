import config from './config';

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

export const pingServer = () => {
  const url = `${config.REISEARCH_API_ENDPOINT}`;
  fetch(url)
  .then((response) => {
    if (response.ok) {
      return;
    }
    throw new Error("There was a server error");
  })
  .catch((e) => {
    console.error(e);
  });
}

export const search = (value) => {
  const params = {
    address: value.toLowerCase(),
  };
  const queryString = formatQueryParams(params);
  const url = `${config.REISEARCH_API_ENDPOINT}search/?${queryString}`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("There was an error retrieving the search results");
    })
    .catch((e) => {
      console.error(e);
    });
};
