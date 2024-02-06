import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../types";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  return (
    <Card>
      <CardActionArea LinkComponent={Link} href={`/products/${product.id}`}>
        <CardMedia
          component="img"
          src="/product-placeholder.webp" // TODO: use product image
          height="100"
          alt={product.attributes.name}
        />

        <CardContent
          sx={{ borderTop: "1px solid", borderColor: "primary.300" }}
        >
          <Box sx={{ mb: "0.75rem" }}>
            <Typography
              variant="h5"
              color="primary.800"
              fontWeight="700"
              sx={{ mb: -0.75 }}
            >
              {product.attributes.name}
            </Typography>
            <Typography variant="caption">{product.attributes.sku}</Typography>
          </Box>
          <Typography variant="body2">
            {product.attributes.custom_description || "No description"}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          size="small"
          color="secondary"
          href={`/orders/new?product=${product.id}`}
        >
          Create Order
        </Button>
      </CardActions>
    </Card>
  );
}
