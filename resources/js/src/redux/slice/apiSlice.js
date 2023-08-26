import { createApi } from "@reduxjs/toolkit/query/react";
import customAxios from "../../utils/ApiRequest";

const api = createApi({
  reducerPath: "api",
  baseQuery: customAxios,
  endpoints: () => ({}),
});

export default api;
