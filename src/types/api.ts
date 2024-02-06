import { Entity } from "./entities";
import { MetaPage } from "./meta";

export interface APIResponse {
  jsonapi: { version: string };
  links: { first: string; last: string } | { self: string };
  data: any[];
  included: Entity[];
}

export interface PaginatedAPIResponse extends APIResponse {
  meta: { page: MetaPage };
  links: { first: string; last: string };
}
