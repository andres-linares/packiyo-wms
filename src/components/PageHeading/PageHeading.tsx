import { Box } from "@mui/material";
import PageTitle from "../PageTitle";
import PageSubtitle from "../PageSubtitle";

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeading({ title, subtitle }: Props) {
  return (
    <Box
      sx={{
        marginBlockEnd: "clamp(2rem, 6vh, 3rem)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <PageTitle noMargin>{title}</PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
    </Box>
  );
}
