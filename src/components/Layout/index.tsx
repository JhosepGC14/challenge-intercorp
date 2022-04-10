import { FC } from "react";
import { Container } from "@mui/material";

const Layout:FC = ({ children }) => {
  return (
    <main className="p-all-2">
      <Container maxWidth="md">{children}</Container>
    </main>
  );
};

export default Layout;
