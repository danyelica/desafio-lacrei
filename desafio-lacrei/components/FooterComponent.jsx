import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
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

  @media (max-width: 540px) {
    margin: 0;
    padding-left: 3rem;
    margin-bottom: 0.8rem;
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

const NavLink = styled.h3`
  font-weight: ${(props) => (props.page ? "700" : "400")};
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;

  @media (max-width: 540px) {
    font-size: 2.5rem;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 4rem;

  margin: 2.4rem 0;
`;

const Icon = styled.img`
  cursor: pointer;

  @media (max-width: 540px) {
    width: 5rem;
  }
`;

const Text = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: var(--gray);

  @media (max-width: 540px) {
    font-size: 2rem;
  }
`;

export default function FooterComponent() {
  const router = useRouter();

  return (
    <Footer>
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
      <Icons>
        <a
          href='https://www.facebook.com/lacrei.saude'
          target='_blank'
          rel='noreferrer'
        >
          <Icon src={FacebookLogo.src} />
        </a>
        <a
          href='https://www.instagram.com/lacrei.saude/'
          target='_blank'
          rel='noreferrer'
        >
          <Icon src={InstagramLogo.src} />
        </a>
        <a
          href='https://www.linkedin.com/company/lacrei/'
          target='_blank'
          rel='noreferrer'
        >
          <Icon src={LinkedinLogo.src} />
        </a>
      </Icons>
      <Text>Desafio Front-end Lacrei </Text>
    </Footer>
  );
}
