import axios, { AxiosRequestConfig } from "axios";

import { getConfig } from "@/config/config";
import { paths } from "@/config/paths";
import { getQueryParams } from "@/helpers/get-query-params";
import { ApiGETItems } from "@/models/api-query";
import { Item } from "@/models/item";

const instanceApi = axios.create({
  timeout: Number(getConfig("NEXT_PUBLIC_INTERNAL_API_TIMEOUT")),
});

const getAxiosConfig = (params: AxiosRequestConfig = {}) => {
  return {
    ...params,
    headers: {
      "Content-Type": "application/json",
      ...params?.headers,
    },
  };
};

export const Api = Object.freeze({
  getItems: async (params: ApiGETItems) => {
    const url = `${paths.api.items}/${params.id}${getQueryParams({
      sortOrder: params.sortOrder,
    })}`;
    const { data } = await instanceApi.get<Item[]>(url, getAxiosConfig());
    return data;
  },
});
