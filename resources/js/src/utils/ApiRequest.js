const customAxios = window.axios;

customAxios.interceptors.request.use(
  (config) => {
    // You can modify the request config here if needed
    config.headers.accept = "application/json";
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
customAxios.interceptors.response.use(
  (response) => {
    // You can modify the response data here if needed
    return response;
  },
  (error) => {
    // Handle response error
    if (error?.response) {
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

export default customAxios;
