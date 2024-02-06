import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProductsPage from "./page";

global.fetch = vi.fn().mockResolvedValue({
  json: async function () {
    return {
      data: [{ attributes: { name: "Product 1", sku: "product-1" } }],
      meta: { page: { total: 23 } },
    };
  },
});

describe("ProductsPage", () => {
  it("calls the API", async () => {
    const Page = await ProductsPage();
    render(Page);

    expect(fetch).toHaveBeenCalledWith(`${process.env.PACKIYO_API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${process.env.PACKIYO_API_KEY}`,
        "Content-Type": "application/vnd.api+json",
      },
    });
  });

  it("renders correctly", async () => {
    const Page = await ProductsPage();
    render(Page);

    expect(screen.getAllByText("Product Listing")).toBeDefined();
    expect(screen.getAllByText("All Products")).toBeDefined();
    expect(screen.getAllByText("(23)")).toBeDefined();
    expect(screen.getAllByRole("navigation")).toBeDefined();
  });

  it("renders the single product", async () => {
    const Page = await ProductsPage();
    render(Page);

    expect(screen.getAllByText("Product 1")).toBeDefined();
  });

  it("renders No Products Found when there are no products", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async function () {
        return { data: [], meta: { page: { total: 0 } } };
      },
    });

    const Page = await ProductsPage();
    render(Page);

    expect(screen.getAllByText("No Products Found")).toBeDefined();
  });
});
