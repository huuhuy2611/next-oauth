import React from "react";
import { CardHeader } from "@mui/material";
import ToggleTheme from "../ToggleTheme";

function Header() {
  return (
    <CardHeader title="Header title" action={<ToggleTheme />}></CardHeader>
  );
}

export default Header;
