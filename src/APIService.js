import config from "./config";

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

// Options callback for post calls
const postOptions = (data = {}) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify(data),
  };
};

// Options callback for delete calls
const deleteOptions = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    //  "Authorization": `Bearer ${API_KEY}`
  },
};


// Helper function for fetch calls
function fetchCall(url, options = {}) {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw error;
        });
      }
      if (options.method === "DELETE") {
        return response.text();
      }
      if (url === config.REISEARCH_API_ENDPOINT) {
        return;
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export const pingServer = () => {
  fetchCall(config.REISEARCH_API_ENDPOINT);
};

export const search = (value) => {
  const params = {
    address: value.toLowerCase(),
  };
  const queryString = formatQueryParams(params);
  const url = `${config.REISEARCH_API_ENDPOINT}search/?${queryString}`;

  return fetchCall(url);
};

export const getSavedProperties = () => {
  return fetchCall(`${config.REISEARCH_API_ENDPOINT}/favorites`)
}

export const postSavedProperty = (data) => {
  return fetchCall(`${config.REISEARCH_API_ENDPOINT}/favorites`, postOptions(data))
}

export const deleteSavedProperty = (id) => {
  return fetchCall(`${config.REISEARCH_API_ENDPOINT}/favorites/${id}`, deleteOptions)
}