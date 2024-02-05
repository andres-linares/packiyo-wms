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
        <CardMedia component="img" />
        <CardContent>
          <Typography variant="h5">{product.attributes.name}</Typography>
          <Typography variant="body1">
            {product.attributes.custom_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Create Order
        </Button>
      </CardActions>
    </Card>
  );
}
