import config from "./config.js";

async function apiFetch(url, conf = {}) {
  const { headers, ...restConf } = conf;

  let res, data;
  try {
    res = await fetch(`${config.apiUrl}${url}`, {
      ...restConf,
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });
    data = await res.json();
  } catch (e) {
    return {
      error: true,
      status: null,
      data: e
    };
  }

  return {
    error: false,
    status: res.status,
    data: data
  };
}

export function login({ username, password }) {
  return apiFetch("/user/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    })
  });
}
