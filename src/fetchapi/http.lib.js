const apiRequests = {
  get: async url => {
    let response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  },
  post: async (url, payload) => {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const data = await response.json();
      return { data, response };
    }
  },
  put: async (url, payload) => {
    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const data = await response.json();
      return { data, response };
    }
  },
  delete: async url => {
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      return { data, response };
    }
  }
};

export default apiRequests;
