import { useRouter } from "next/router";
import styled from "styled-components";
import FacebookLogo from "../public/assets/icons/FacebookLogo.svg";
import InstagramLogo from "../public/assets/icons/InstagramLogo.svg";
import LinkedinLogo from "../public/assets/icons/LinkedinLogo.svg";

const Footer = styled.header`
  display: flex;
  flex-direction: column;

  margin: 0 6.4rem 0.8rem;
  padding-top: 3rem;
  height: 150px;
  width: 90%;

  border-top: 1px solid #b0e0d3;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

const Link = styled.a`
  font-weight: ${(props) => (props.page ? "700" : "400")};
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  gap: 4rem;

  margin: 2.4rem 0;
  cursor: pointer;
`;

const Text = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: var(--gray);
`;

export default function FooterComponent() {
  const router = useRouter();

  return (
    <Footer>
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
        </Link>{" "}
      </Nav>
      <Icons>
        <a href='/'>
          <img src={FacebookLogo.src} />
        </a>
        <a href='/'>
          <img src={InstagramLogo.src} />
        </a>
        <a href='/'>
          <img src={LinkedinLogo.src} />
        </a>
      </Icons>
      <Text>Desafio Front-end Lacrei </Text>
    </Footer>
  );
}
