import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { getProducts } from "./api";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductItem } from "./components";
import { PageHeading } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Packiyo",
};

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

      <Typography variant="h2">
        All Products&nbsp;
        <Box component="span" sx={{ color: "primary.600", fontWeight: 600 }}>
          ({products.meta.page.total})
        </Box>
      </Typography>

      {products.data.length === 0 ? (
        <Typography>No Products Found</Typography>
      ) : (
        <Grid2 container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 2 }}>
          {products.data.map((product) => (
            <Grid2 key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductItem product={product} />
            </Grid2>
          ))}
        </Grid2>
      )}

      <Stack direction="row" justifyContent="flex-end" sx={{ mt: 5, mb: 3 }}>
        <Pagination
          count={products.meta.page.lastPage}
          showFirstButton
          showLastButton
          color="secondary"
        />
      </Stack>
    </Container>
  );
}
