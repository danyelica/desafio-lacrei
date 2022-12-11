import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 6.4rem;
  height: 60px;
  width: 100%;

  background-color: #eeeeee;

  position: ${(props) => props.menu && "fixed"};

  @media (max-width: 1040px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.8rem 1.6rem;
    height: auto;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 44px;
  letter-spacing: -1px;

  cursor: pointer;

  color: var(--color-primary);

  &:hover {
    opacity: 0.7;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;

  @media (max-width: 540px) {
    gap: 2rem;
  }
`;

const NavLink = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;

  color: ${(props) => (props.page ? "var(--color-primary)" : "var(--black)")};

  @media (max-width: 540px) {
    font-size: 1.4rem;
  }
`;

export default function HeaderComponent() {
  const router = useRouter();

  return (
    <Header>
      <Link href='/'>
        <Title>Lacrei</Title>
      </Link>
      <Nav>
        <Link href='/'>
          <NavLink page={router.pathname === "/"}>Home</NavLink>
        </Link>
        <Link href='/pessoa-usuaria'>
          <NavLink page={router.pathname === "/pessoa-usuaria"}>
            Pessoa Usuária
          </NavLink>
        </Link>
        <Link href='/profissional'>
          <NavLink page={router.pathname === "/profissional"}>
            Profissional
          </NavLink>
        </Link>
      </Nav>
    </Header>
  );
}
