import { Box, Container, Typography } from "@mui/material";
import { getProducts } from "./api";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductItem } from "./components";
import { PageHeading } from "@/components";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Container maxWidth="lg">
      <PageHeading
        title="Product Listing"
        subtitle='Fusing eCommerce brand proficiency, warehouse operation mastery, and
        unwavering support, we present advanced technology, tools, and radical
        assistance tailored for your optimal warehouse performance, now
        seamlessly integrated into our "Products Listing" page.'
      />

      <Grid2 container spacing={2}>
        {products.data.map((product) => (
          <Grid2 key={product.id}>
            <ProductItem product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
