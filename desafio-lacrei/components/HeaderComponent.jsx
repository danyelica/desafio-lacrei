import styled from "styled-components";
import MenuIcon from "../public/assets/icons/menu-icon.svg";
import CloseIcon from "../public/assets/icons/close-icon.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${(props) => (props.menu ? "6.4rem 0" : "0 6.4rem")};
  height: 60px;
  width: 100%;

  background-color: #eeeeee;

  position: ${(props) => props.menu && "fixed"};

  @media (max-width: 540px) {
    flex-direction: ${(props) => (props.menu ? "column" : "row")};
    height: ${(props) => (props.menu ? "100vh" : "60px")};
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 44px;

  color: var(--color-primary);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: ${(props) => (props.menu ? "column" : "row")};
  align-items: ${(props) => (props.menu ? "center" : "flex-start")};
  gap: 4rem;
`;

const NavLink = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;

  color: ${(props) => (props.page ? "var(--color-primary)" : "var(--black)")};

  @media (max-width: 540px) {
    display: ${(props) => (props.menu ? "block" : "none")};
    font-size: 2.3rem;
  }
`;

const Menu = styled.img`
  display: none;
  width: 45px;

  @media (max-width: 540px) {
    display: block;
  }
`;

export default function HeaderComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <Header menu={openMenu}>
      <Title>Lacrei</Title>
      <Nav menu={openMenu}>
        <Link href='/'>
          <NavLink menu={openMenu} page={router.pathname === "/"}>
            Home
          </NavLink>
        </Link>
        <Link href='/pessoa-usuaria'>
          <NavLink menu={openMenu} page={router.pathname === "/pessoa-usuaria"}>
            Pessoa Usuária
          </NavLink>
        </Link>
        <Link href='/profissional'>
          <NavLink menu={openMenu} page={router.pathname === "/profissional"}>
            Profissional
          </NavLink>
        </Link>
      </Nav>

      <Menu
        src={openMenu ? CloseIcon.src : MenuIcon.src}
        menu={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      />
    </Header>
  );
}
