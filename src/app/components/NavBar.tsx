import { Toolbar } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { styled } from "@mui/system";

const NavLinks = styled("div")({
  marginLeft: 10,
  display: "flex",
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexGrow: 1,
});

const MenuLink = styled("div")({
  textDecoration: "none",
  color: "black",
  marginLeft: 20,
  borderBottom: "1px solid transparent",
  fontSize: '1rem',
  fontWeight: 500,
  "&:hover": {
    borderBottom: "1px solid black"
  },
});

const NavBar = () => {
  return (
    <Toolbar>
      <NavLinks>
        <MenuLink>
          <Link href="/">Home</Link>
        </MenuLink>
        <MenuLink>
          <Link href="#about">About</Link>
        </MenuLink>
      </NavLinks>
    </Toolbar>
  );
};

export default NavBar;
