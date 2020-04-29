const axios = require("axios");

export const create = (userId, token, data) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/event/newevent/${userId}`, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.log("Error is:", err));
};

// export const list = () => {
//     return fetch(`${process.env.REACT_APP_API_URL}/posts`, {
//         method: "GET"
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// with pagination
export const list = (page) => {
  return fetch(`${process.env.REACT_APP_API_URL}/event/allevents/`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singlePost = (postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listByUser = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/event/allevent/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const remove = (postId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/event/deleteevent/${postId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (postId, token, post) => {
  console.log(postId, token, post);
  return fetch(`${process.env.REACT_APP_API_URL}/edit/editevent/${postId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const like = (userId, token, postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/like`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const unlike = (userId, token, postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/unlike`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/comment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId, comment }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/uncomment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId, comment }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
