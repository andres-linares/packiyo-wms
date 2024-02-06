import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  noMargin?: boolean;
}

export default function PageTitle({
  children,
  noMargin,
}: PropsWithChildren<Props>) {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: "clamp(2rem, 6.5vw, 3.25rem)",
        fontWeight: 700,
        lineHeight: "1.222",
        marginBottom: noMargin ? null : "clamp(0.5rem, 2.25vw, 1rem)",
        textAlign: "center",
        color: "primary.800",
      }}
    >
      {children}
    </Typography>
  );
}
