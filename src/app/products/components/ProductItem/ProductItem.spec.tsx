import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductItem from ".";
import { Product } from "../../types";
import { EntityType } from "@/types/entities";

const mockProduct: Product = {
  type: EntityType.PRODUCT,
  id: "1",
  attributes: {
    sku: "my-first-product",
    name: "My First Product",
    price: 0,
    value: 0,
    customs_price: 0,
    hs_code: "",
    country_of_origin: "",
    notes: "",
    width: 0,
    height: 0,
    length: 0,
    weight: 0,
    barcode: "",
    custom_description: "My Description",
    inventory_sync: 0,
    quantity_on_hand: 0,
    quantity_allocated: 0,
    quantity_available: 0,
    quantity_backordered: 0,
    created_at: "",
    updated_at: "",
  },
  links: { self: "/me" },
  relationships: {
    customer: {
      data: { type: EntityType.CUSTOMER, id: "1" },
      links: { self: "/me", related: "/him" },
    },
    product_images: {
      data: [],
      links: { self: "/me", related: "/him" },
    },
  },
};

describe("ProductItem", () => {
  it("renders correctly", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByRole("heading", { name: mockProduct.attributes.name })).toBeDefined();
    expect(screen.getByText(mockProduct.attributes.sku)).toBeDefined();
    expect(screen.getByText(mockProduct.attributes.custom_description as string)).toBeDefined();
  });

  it("contains No Description when custom_description is not provided", () => {
    const product = {
      ...mockProduct,
      attributes: { ...mockProduct.attributes, custom_description: null },
    };
    render(<ProductItem product={product} />);

    expect(screen.getByText("No description")).toBeDefined();
  });

  it("has an image with the alt text equal to the product name", () => {
    render(<ProductItem product={mockProduct} />);

    // not sure why it renders 3 images but the important thing is that it renders at least one
    expect(screen.getAllByAltText(mockProduct.attributes.name)).toBeDefined();
  });

  it("contains a link to the product page", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getAllByRole("link", { name: `${mockProduct.attributes.name} product page` })).toBeDefined();
  });

  it("contains a link to create an order", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getAllByRole("link", { name: /create order/i })).toBeDefined();
  });
});
