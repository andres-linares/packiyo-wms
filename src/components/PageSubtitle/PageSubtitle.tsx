import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PageSubtitle({ children }: PropsWithChildren) {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        color: "primary.600",
        textAlign: "center",
        lineHeight: "1.75",
      }}
    >
      {children}
    </Typography>
  );
}
