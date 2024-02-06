"use client";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../types";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const router = useRouter();

  return (
    <Card>
      <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
        <CardMedia
          component="img"
          src="/product-placeholder.webp" // TODO: use product image
          height="100"
        />
        <CardContent>
          <Typography variant="h5">{product.attributes.name}</Typography>
          <Typography variant="h6">{product.attributes.sku}</Typography>
          <Typography variant="body2">
            {product.attributes.custom_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Create Order
        </Button>
      </CardActions>
    </Card>
  );
}
