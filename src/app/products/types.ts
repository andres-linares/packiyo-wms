import { PaginatedAPIResponse } from "@/types/api";
import { Entity, EntityType } from "@/types/entities";

interface ProductAttributes {
  sku: string;
  name: string;
  price: number;
  value: number | null;
  customs_price: number;
  hs_code: string;
  country_of_origin: string | null;
  notes: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  barcode: string;
  custom_description: string | null;
  inventory_sync: number;
  quantity_on_hand: number;
  quantity_allocated: number;
  quantity_available: number;
  quantity_backordered: number;
  created_at: string;
  updated_at: string;
}

interface ProductRelationships {
  customer: {
    links: {
      related: string;
      self: string;
    };
    data: {
      type: EntityType.CUSTOMER;
      id: string;
    };
  };
  product_images: {
    links: {
      related: string;
      self: string;
    };
    data: []; // not sure what this contains. No examples in Postman
  };
}

export interface Product extends Entity {
  type: EntityType.PRODUCT;
  attributes: ProductAttributes;
  relationships: ProductRelationships;
}

export interface ProductsResponse extends PaginatedAPIResponse {
  data: Product[];
}
