export enum EntityType {
  PRODUCT = "products",
  ORDER = "orders",
  CUSTOMER = "customers",
  CONTACT_INFORMATION = "contact-informations",
  ORDER_CHANNEL = "order-channels",
  ORDER_ITEM = "order-items",
}

export interface Entity {
  type: EntityType;
  id: string;
  attributes: any;
  relationships: any;
  links: {
    self: string;
  };
}
