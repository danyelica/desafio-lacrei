import styled from "styled-components";
import { useRouter } from "next/router";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 6.4rem;
  height: 60px;
  width: 100%;

  background-color: #eeeeee;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 44px;

  color: var(--color-primary);
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

const Link = styled.a`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;

  color: ${(props) => (props.page ? "var(--color-primary)" : "var(--black)")};
`;

export default function HeaderComponent() {
  const router = useRouter();

  return (
    <Header>
      <Title>Lacrei</Title>,
      <Nav>
        <Link page={router.pathname === "/"} href='/'>
          Home
        </Link>
        <Link
          page={router.pathname === "/pessoa-usuaria"}
          href='/pessoa-usuaria'
        >
          Pessoa Usuária
        </Link>
        <Link page={router.pathname === "/profissional"} href='/profissional'>
          Profissional
        </Link>
      </Nav>
    </Header>
  );
}
