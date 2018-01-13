export const login = (username, password) => {
  const url =
    "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch";

  return fetch(url).then(response => {
    return {
      username: "test"
    };
  });
};
