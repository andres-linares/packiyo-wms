import { query } from "@/fetcher";
import { ProductsResponse } from "./types";

const getProducts = () => {
  return query("products") as Promise<ProductsResponse>;
};

export { getProducts };
