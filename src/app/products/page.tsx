import { Container, Typography } from "@mui/material";
import { getProducts } from "./api";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductItem } from "./components";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Container maxWidth="lg">
      <Typography>Products</Typography>

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
