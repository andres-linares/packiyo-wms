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
        marginBottom: noMargin ? null : "clamp(0.5rem, 2.25vw, 1rem)",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
}
