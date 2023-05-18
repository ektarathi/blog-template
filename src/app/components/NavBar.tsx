import { Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { styled } from "@mui/system";

const LogoWrapper = styled("div")({
  flexGrow: "1",
  cursor: "pointer",
});

const NavLinks = styled("div")({
  marginLeft: 10,
  display: "flex",
});

const MenuLink = styled("div")({
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
  marginLeft: 20,
  borderBottom: "1px solid transparent",
  "&:hover": {
    color: "yellow",
    borderBottom: "1px solid white",
  },
});

const NavBar = () => {
  return (
    <Toolbar>
      <LogoWrapper>
        <Typography variant="h4">Navbar</Typography>
      </LogoWrapper>

      <NavLinks>
        <MenuLink>
          <Link href="/">Home</Link>
        </MenuLink>
        <MenuLink>
          <Link href="/about">About</Link>
        </MenuLink>
        <MenuLink>
          <Link href="/contact">Contact</Link>
        </MenuLink>
      </NavLinks>
    </Toolbar>
  );
};

export default NavBar;
