import FacebookLogo from "../public/assets/icons/FacebookLogo.svg";
import InstagramLogo from "../public/assets/icons/InstagramLogo.svg";
import LinkedinLogo from "../public/assets/icons/LinkedinLogo.svg";
import styled from "styled-components";

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

const Link = styled.h3`
  font-weight: ${(props) =>
    window.location.pathname === props.page ? "700" : "400"};
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

  color: #515151;
`;

export default function FooterComponent() {
  return (
    <Footer>
      <Nav>
        <Link page='/'>Home</Link>
        <Link page='/pessoa-usuaria'>Pessoa Usuária</Link>
        <Link page='profissional'>Profissional</Link>{" "}
      </Nav>
      <Icons>
        <img src={FacebookLogo.src} />
        <img src={InstagramLogo.src} />
        <img src={LinkedinLogo.src} />
      </Icons>
      <Text>Desafio Front-end Lacrei </Text>
    </Footer>
  );
}
