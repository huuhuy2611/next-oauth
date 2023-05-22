"use client";

import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      className="text-black dark:text-white bg-white dark:bg-black"
      sx={{ height: "100vh" }}
    >
      <Header />
      {children}
    </Box>
  );
}
